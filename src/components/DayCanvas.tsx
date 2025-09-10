import React, { useRef, useEffect } from 'react';
import p5 from 'p5';

interface DayCanvasProps {
  dayId: string;
}

const DayCanvas: React.FC<DayCanvasProps> = ({ dayId }) => {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      new p5(sketch, canvasRef.current);
    }
  }, [dayId]);

  const sketch = (p: p5) => {
    p.setup = () => {
      p.createCanvas(400, 400);
      p.background(0);
    };

    p.draw = () => {
      p.stroke(255);
      p.point(p.random(p.width), p.random(p.height));
    };
  };

  return <div ref={canvasRef} style={{ width: 400, height: 400, border: '1px solid white' }}></div>;
};

export default DayCanvas;
