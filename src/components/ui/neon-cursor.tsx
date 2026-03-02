import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface NeonCursorProps {
    className?: string;
}

/**
 * Stationary mouse-position spotlight glow.
 * Pure CSS radial-gradient on a div — zero canvas, zero stutter.
 */
export function NeonCursor({ className }: NeonCursorProps) {
    const glowRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = glowRef.current;
        if (!el) return;

        const onMove = (e: MouseEvent) => {
            const rect = el.parentElement?.getBoundingClientRect();
            if (!rect) return;
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            el.style.transform = `translate(${x}px, ${y}px)`;
            el.style.opacity = "1";
        };

        const onLeave = () => {
            if (el) el.style.opacity = "0";
        };

        window.addEventListener("mousemove", onMove, { passive: true });
        document.addEventListener("mouseleave", onLeave);

        return () => {
            window.removeEventListener("mousemove", onMove);
            document.removeEventListener("mouseleave", onLeave);
        };
    }, []);

    return (
        <div
            className={cn("absolute inset-0 pointer-events-none overflow-hidden", className)}
        >
            <div
                ref={glowRef}
                className="absolute -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300"
                style={{
                    width: 380,
                    height: 380,
                    borderRadius: "50%",
                    background:
                        "radial-gradient(circle, rgba(124,58,237,0.18) 0%, rgba(37,99,235,0.10) 35%, transparent 70%)",
                    opacity: 0,
                    pointerEvents: "none",
                    willChange: "transform",
                }}
            />
        </div>
    );
}

export default NeonCursor;
