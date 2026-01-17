import p5 from 'p5';

export const recursiveTree = (p: p5) => {
  let angle: number;

  p.setup = () => {
    p.createCanvas(p.windowWidth * 0.8, p.windowHeight * 0.8);
    p.colorMode(p.HSB, 255);
  };

  p.draw = () => {
    p.background(0);
    angle = p.map(p.mouseX, 0, p.width, 0, p.PI / 2);
    p.translate(p.width / 2, p.height);
    p.stroke(140, 200, 255);
    p.strokeWeight(2);
    branch(p, 150, 1);
  };

  function branch(p: p5, h: number, level: number) {
    // Draw the branch
    p.line(0, 0, 0, -h);
    // Move to the end of that branch
    p.translate(0, -h);

    // Each branch will be 2/3rds the size of the previous one
    h *= 0.66;

    if (h > 4) {
      p.push();
      p.rotate(angle);
      p.stroke(p.map(level, 0, 10, 140, 200), 200, 255);
      branch(p, h, level + 1);
      p.pop();

      p.push();
      p.rotate(-angle);
      p.stroke(p.map(level, 0, 10, 140, 200), 200, 255);
      branch(p, h, level + 1);
      p.pop();
    }
  }
};
