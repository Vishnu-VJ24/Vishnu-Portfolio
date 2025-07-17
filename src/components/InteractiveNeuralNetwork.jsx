import React, { useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Line } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { X, RotateCcw, ZoomIn, ZoomOut } from 'lucide-react';
import * as THREE from 'three';

// Interactive Neural Network Configuration
const LAYERS = [7, 10, 13, 10, 7];
const NODES_PER_LAYER = LAYERS.map(count => count);
const LAYER_SPACING = 12;
const STRETCH_Y = 1.1;
const NODE_RADIUS = 0.5;
const CONNECTION_PROBABILITY = 0.6;
const PARTICLE_COUNT = 80;
const PARTICLE_SPEED = 0.01;
const PARTICLE_RADIUS = 0.03;

// Interactive Scene Component
function InteractiveNeuralNetworkScene() {
  const nodes = React.useMemo(() => {
    const tempNodes = [];
    let nodeIndex = 0;
    NODES_PER_LAYER.forEach((count, layerIndex) => {
      const layerNodes = [];
      const angleStep = (2 * Math.PI) / count;
      const layerRadius = count * 3;
      for (let i = 0; i < count; i++) {
        const angle = i * angleStep;
        const x = layerRadius * Math.cos(angle);
        const y = layerRadius * Math.sin(angle) * STRETCH_Y;
        const z = layerIndex * LAYER_SPACING - (NODES_PER_LAYER.length * LAYER_SPACING) / 2;
        layerNodes.push({
          id: `node-${nodeIndex++}`,
          position: new THREE.Vector3(x, y, z),
          color: new THREE.Color(getInteractiveColor(layerIndex, i)),
          originalPosition: new THREE.Vector3(x, y, z),
        });
      }
      tempNodes.push(layerNodes);
    });
    return tempNodes;
  }, []);

  const connections = React.useMemo(() => {
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

  // Interactive rotation
  const groupRef = React.useRef();
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.2;
      groupRef.current.rotation.x += delta * 0.1;
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
            emissiveIntensity={8}
            transparent
            opacity={1}
          />
        </mesh>
      ))}

      {/* Render Connections */}
      {connections.length > 0 && (
        <>
          {connections.map((conn, i) => (
            <Line
              key={i}
              points={[conn.start.toArray(), conn.end.toArray()]}
              color={conn.color}
              lineWidth={1.5}
              transparent
              opacity={0.3}
            />
          ))}
          <InteractiveParticles connections={connections} count={PARTICLE_COUNT} />
        </>
      )}
    </group>
  );
}

// Interactive Particles Component
function InteractiveParticles({ connections, count }) {
  if (!connections || connections.length === 0) return null;

  const particles = React.useMemo(() => {
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

  const particleMesh = React.useRef();

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
      <meshStandardMaterial color="#ff6b35" emissive="#ff6b35" emissiveIntensity={15} />
    </instancedMesh>
  );
}

// Color function for interactive network
function getInteractiveColor(layerIndex, nodeIndex) {
  const colors = [
    '#ff6b35', '#00ff88', '#ff1493', '#00ffff', '#ff00ff',
    '#ffff00', '#ff4500', '#32cd32', '#ff69b4', '#00bfff',
    '#ffa500', '#7fff00', '#ff6347', '#00fa9a', '#1e90ff'
  ];
  const colorIndex = (layerIndex * 5 + nodeIndex * 2) % colors.length;
  return colors[colorIndex];
}

// Main Interactive Modal Component
export default function InteractiveNeuralNetwork({ isOpen, onClose }) {
  const [controls, setControls] = useState({
    autoRotate: true,
    zoom: 1,
  });

  const handleReset = () => {
    setControls({
      autoRotate: true,
      zoom: 1,
    });
  };

  const handleZoomIn = () => {
    setControls(prev => ({ ...prev, zoom: Math.min(prev.zoom + 0.2, 2) }));
  };

  const handleZoomOut = () => {
    setControls(prev => ({ ...prev, zoom: Math.max(prev.zoom - 0.2, 0.5) }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full h-full max-w-6xl max-h-[90vh] bg-black/90 rounded-2xl border border-white/20 overflow-hidden">
        {/* Header */}
        <div className="absolute top-4 left-4 right-4 z-10 flex justify-between items-center">
          <h2 className="text-white text-xl font-bold">Interactive Neural Network</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Controls */}
        <div className="absolute top-16 left-4 z-10 flex gap-2">
          <button
            onClick={handleReset}
            className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            title="Reset View"
          >
            <RotateCcw size={16} />
          </button>
          <button
            onClick={handleZoomIn}
            className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            title="Zoom In"
          >
            <ZoomIn size={16} />
          </button>
          <button
            onClick={handleZoomOut}
            className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            title="Zoom Out"
          >
            <ZoomOut size={16} />
          </button>
        </div>

        {/* Instructions */}
        <div className="absolute bottom-4 left-4 right-4 z-10">
          <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4 text-white/80 text-sm">
            <p className="mb-2"><strong>How to interact:</strong></p>
            <p>• <strong>Mouse:</strong> Click and drag to rotate the network</p>
            <p>• <strong>Scroll:</strong> Zoom in and out</p>
            <p>• <strong>Right-click:</strong> Pan the view</p>
            <p>• <strong>Buttons:</strong> Use controls above for quick actions</p>
          </div>
        </div>

        {/* 3D Canvas */}
        <Canvas 
          camera={{ 
            position: [0, 0, 60], 
            fov: 60,
            near: 0.1,
            far: 1000
          }}
          style={{ background: '#000000' }}
        >
          <InteractiveNeuralNetworkScene />
          <OrbitControls
            enableZoom={true}
            enablePan={true}
            enableRotate={true}
            autoRotate={controls.autoRotate}
            autoRotateSpeed={0.5}
            minDistance={20}
            maxDistance={200}
            minPolarAngle={0}
            maxPolarAngle={Math.PI}
          />
          <EffectComposer>
            <Bloom luminanceThreshold={0.2} intensity={1.8} mipmapBlur />
          </EffectComposer>
        </Canvas>
      </div>
    </div>
  );
} 