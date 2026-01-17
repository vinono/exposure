import React, { useEffect, useRef } from 'react';
import p5 from 'p5';

interface P5WrapperProps {
  sketch: (p: p5) => void;
}

const P5Wrapper: React.FC<P5WrapperProps> = ({ sketch }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const p5InstanceRef = useRef<p5 | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      // Cleanup previous instance if it exists
      if (p5InstanceRef.current) {
        p5InstanceRef.current.remove();
      }

      // Create new p5 instance
      p5InstanceRef.current = new p5(sketch, containerRef.current);
    }

    return () => {
      if (p5InstanceRef.current) {
        // Try to lose WebGL context if it exists
        const canvas = (p5InstanceRef.current as any).canvas;
        if (canvas) {
          const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
          if (gl) {
            gl.getExtension('WEBGL_lose_context')?.loseContext();
          }
        }
        p5InstanceRef.current.remove();
        p5InstanceRef.current = null;
      }
    };
  }, [sketch]);

  return <div ref={containerRef} className="p5-container" />;
};

export default P5Wrapper;
