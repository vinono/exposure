import p5 from 'p5';

export const tesseract = (p: p5) => {
  let angle = 0;
  // 4D hypercube projection points
  const points = [
    [-1, -1, -1, 1], [1, -1, -1, 1], [1, 1, -1, 1], [-1, 1, -1, 1],
    [-1, -1, 1, 1], [1, -1, 1, 1], [1, 1, 1, 1], [-1, 1, 1, 1],
    [-1, -1, -1, -1], [1, -1, -1, -1], [1, 1, -1, -1], [-1, 1, -1, -1],
    [-1, -1, 1, -1], [1, -1, 1, -1], [1, 1, 1, -1], [-1, 1, 1, -1]
  ];

  p.setup = () => {
    p.createCanvas(p.windowWidth * 0.8, p.windowHeight * 0.8, p.WEBGL);
  };

  p.draw = () => {
    p.background(0);
    p.rotateX(angle);
    p.rotateY(angle * 0.7);
    p.rotateZ(angle * 0.3);

    p.stroke(0, 255, 204);
    p.noFill();

    // Simplified projection to 3D/2D
    for (let i = 0; i < points.length; i++) {
        p.push();
        let scale = 100 + Math.sin(angle) * 20;
        p.translate(points[i][0] * scale, points[i][1] * scale, points[i][2] * scale);
        p.box(5);
        p.pop();
    }
    
    angle += 0.02;
  };
};
