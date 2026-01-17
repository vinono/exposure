import p5 from 'p5';

export const spirograph = (p: p5) => {
  let R = 150;
  let r = 52;
  let d = 70;
  let t = 0;
  let path: p5.Vector[] = [];

  p.setup = () => {
    p.createCanvas(p.windowWidth * 0.8, p.windowHeight * 0.8);
  };

  p.draw = () => {
    p.background(0);
    p.translate(p.width / 2, p.height / 2);
    p.noFill();
    p.stroke(0, 255, 204);

    let x = (R - r) * Math.cos(t) + d * Math.cos(((R - r) / r) * t);
    let y = (R - r) * Math.sin(t) - d * Math.sin(((R - r) / r) * t);
    path.push(p.createVector(x, y));

    p.beginShape();
    for (let v of path) {
      p.vertex(v.x, v.y);
    }
    p.endShape();

    t += 0.05;
    if (path.length > 2000) path.shift();
    
    // Interactive
    if (p.mouseIsPressed) {
      d = p.map(p.mouseX, 0, p.width, 10, 200);
      r = p.map(p.mouseY, 0, p.height, 10, 100);
      path = [];
      t = 0;
    }
  };
};
