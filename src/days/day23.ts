import p5 from 'p5';

export const moirePatterns = (p: p5) => {
  p.setup = () => {
    p.createCanvas(p.windowWidth * 0.8, p.windowHeight * 0.8);
    p.noFill();
  };

  p.draw = () => {
    p.background(0);
    p.stroke(255, 150);
    
    // Stationary grid
    p.push();
    p.translate(p.width / 2, p.height / 2);
    for (let i = 0; i < 200; i += 5) {
      p.rect(-i, -i, i * 2, i * 2);
    }
    p.pop();
    
    // Moving grid
    p.push();
    p.translate(p.mouseX, p.mouseY);
    p.rotate(p.frameCount * 0.01);
    p.stroke(0, 255, 204, 150);
    for (let i = 0; i < 200; i += 5) {
      p.ellipse(0, 0, i * 2, i * 2);
    }
    p.pop();
  };
};
