import p5 from 'p5';

export const fourierEpicycles = (p: p5) => {
  let time = 0;
  let path: p5.Vector[] = [];

  p.setup = () => {
    p.createCanvas(p.windowWidth * 0.8, p.windowHeight * 0.8);
  };

  p.draw = () => {
    p.background(0);
    p.translate(200, 300);

    let x = 0;
    let y = 0;

    for (let i = 0; i < 5; i++) {
      let prevx = x;
      let prevy = y;
      let n = i * 2 + 1;
      let radius = 75 * (4 / (n * Math.PI));
      x += radius * Math.cos(n * time);
      y += radius * Math.sin(n * time);

      p.stroke(255, 100);
      p.noFill();
      p.ellipse(prevx, prevy, radius * 2);

      p.fill(255);
      p.stroke(255);
      p.line(prevx, prevy, x, y);
    }

    path.unshift(p.createVector(x, y));

    p.translate(200, 0);
    p.line(x - 200, y, 0, path[0].y);
    p.beginShape();
    p.noFill();
    for (let i = 0; i < path.length; i++) {
      p.vertex(i, path[i].y);
    }
    p.endShape();

    time += 0.05;

    if (path.length > 250) {
      path.pop();
    }
  };
};
