import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Line } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';

// --- CONFIGURATION ---
// Moderately complex, symmetric, hexagonal network
const LAYERS = [7, 10, 13, 10, 7];
const NODES_PER_LAYER = LAYERS.map(count => count);
const LAYER_SPACING = 16.2; // 10% smaller
const STRETCH_Y = 1.125; // Slightly less vertical stretch
const NODE_RADIUS = 0.63; // 10% smaller
const CONNECTION_PROBABILITY = 0.425; // Reduced by 15% (from 0.5 to 0.425)
const PARTICLE_COUNT = window.innerWidth < 600 ? 60 : 120; // Fewer particles on mobile
const PARTICLE_SPEED = 0.008; // Slower, smoother
const PARTICLE_RADIUS = 0.08; // Much bigger particles

// --- Main Scene Component ---
function NeuralNetworkScene() {
  const nodes = useMemo(() => {
    const tempNodes = [];
    let nodeIndex = 0;
    NODES_PER_LAYER.forEach((count, layerIndex) => {
      const layerNodes = [];
      const angleStep = (2 * Math.PI) / count;
      const layerRadius = count * 3.78; // 10% smaller
      for (let i = 0; i < count; i++) {
        const angle = i * angleStep;
        const x = layerRadius * Math.cos(angle);
        const y = layerRadius * Math.sin(angle) * STRETCH_Y;
        const z = layerIndex * LAYER_SPACING - (NODES_PER_LAYER.length * LAYER_SPACING) / 2;
        layerNodes.push({
          id: `node-${nodeIndex++}`,
          position: new THREE.Vector3(x, y, z),
          // Create a more colorful palette with neutral and neon colors
          color: new THREE.Color(getNeonColor(layerIndex, i)),
        });
      }
      tempNodes.push(layerNodes);
    });
    return tempNodes;
  }, []);

  const connections = useMemo(() => {
    // Guard: Don't calculate connections until nodes are ready
    if (nodes.length === 0) return [];
    
    const tempConnections = [];
    for (let i = 0; i < nodes.length - 1; i++) {
      for (const startNode of nodes[i]) {
        for (const endNode of nodes[i + 1]) {
          if (Math.random() > CONNECTION_PROBABILITY) continue; 
          tempConnections.push({
            start: startNode.position,
            end: endNode.position,
            color: startNode.color,
          });
        }
      }
    }
    return tempConnections;
  }, [nodes]);

  // Rotate the whole group for a dynamic feel
  const groupRef = useRef();
  useFrame((state, delta) => {
    if (groupRef.current) {
        groupRef.current.rotation.y += delta * 0.015; // Slower rotation
        groupRef.current.rotation.x += delta * 0.008;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Render Nodes */}
      {nodes.flat().map(node => (
        <mesh key={node.id} position={node.position}>
          <sphereGeometry args={[NODE_RADIUS, 16, 16]} />
          <meshStandardMaterial 
            color={node.color} 
            emissive={node.color} 
            emissiveIntensity={3.5}
            transparent
            opacity={0.95}
          />
        </mesh>
      ))}

      {/* Final Fix: Conditionally render Lines and Particles only when connections data is fully ready */}
      {connections.length > 0 && (
        <>
          {connections.map((conn, i) => (
            <Line
              key={i}
              points={[conn.start.toArray(), conn.end.toArray()]}
              color={conn.color}
              lineWidth={1.5}
              transparent
              opacity={0.36}
            />
          ))}
          <Particles connections={connections} count={PARTICLE_COUNT} />
        </>
      )}
    </group>
  );
}

// --- Particles Component ---
function Particles({ connections, count }) {
    // Guard: If connections aren't ready, render nothing. This is a critical fix.
    if (!connections || connections.length === 0) return null;

    const particles = useMemo(() => {
        const tempParticles = [];
        for (let i = 0; i < count; i++) {
        const conn = connections[Math.floor(Math.random() * connections.length)];
        tempParticles.push({
            connection: conn,
            progress: Math.random(), 
            speed: PARTICLE_SPEED * (0.5 + Math.random() * 0.5),
        });
        }
        return tempParticles;
    }, [connections, count]);

    const particleMesh = useRef();

    useFrame(() => {
        if (!particleMesh.current) return;

        for (let i = 0; i < count; i++) {
            const particle = particles[i];
            particle.progress += particle.speed;
            if (particle.progress > 1) {
                particle.progress = 0;
                particle.connection = connections[Math.floor(Math.random() * connections.length)];
            }
            const position = new THREE.Vector3().lerpVectors(
                particle.connection.start,
                particle.connection.end,
                particle.progress
            );
            const matrix = new THREE.Matrix4().setPosition(position);
            particleMesh.current.setMatrixAt(i, matrix);
        }
        particleMesh.current.instanceMatrix.needsUpdate = true;
    });

    return (
        <instancedMesh ref={particleMesh} args={[null, null, count]}>
        <sphereGeometry args={[PARTICLE_RADIUS, 8, 8]} />
        <meshStandardMaterial 
          color="#00ffff" 
          emissive="#00ffff" 
          emissiveIntensity={4}
          transparent
          opacity={0.95}
        />
        </instancedMesh>
    );
}

// Function to generate solid, vibrant colors
function getNeonColor(layerIndex, nodeIndex) {
  const colors = [
    '#ff4500', // Red Orange
    '#00ff00', // Pure Green
    '#ff0080', // Magenta
    '#00ffff', // Cyan
    '#ffff00', // Yellow
    '#ff8000', // Orange
    '#8000ff', // Purple
    '#00ff80', // Spring Green
    '#ff0040', // Deep Pink
    '#0080ff', // Blue
    '#ff4000', // Red Orange
    '#40ff00', // Lime
    '#ff00ff', // Magenta
    '#00ff40', // Green
    '#ff8000', // Orange
    '#8000ff', // Purple
    '#ff0040', // Pink
    '#00ff80', // Spring Green
    '#ff4000', // Red Orange
    '#40ff00', // Lime
  ];
  
  // Use layer and node index to create variety
  const colorIndex = (layerIndex * 5 + nodeIndex * 2) % colors.length;
  return colors[colorIndex];
}

// --- Main Export Component ---
export default function ThreeDAnimation({ opacity = 1 }) {
  // Responsive camera distance
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 600;
  const cameraPosition = isMobile ? [0, 0, 108] : [0, 0, 81]; // 10% smaller
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none', // So it doesn't block clicks
        opacity: Math.max(opacity, 0.3), // Use the prop, clamp to 0.3
        transition: 'opacity 0.5s',
        backgroundColor: '#000000', // Pure black background
      }}
    >
      <Canvas camera={{ position: cameraPosition, fov: 50 }}>
        <color attach="background" args={['#000000']} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.18}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={(2 * Math.PI) / 3}
        />
        <NeuralNetworkScene />
        <EffectComposer>
          <Bloom luminanceThreshold={0.3} intensity={1.2} mipmapBlur />
        </EffectComposer>
      </Canvas>
    </div>
  );
}