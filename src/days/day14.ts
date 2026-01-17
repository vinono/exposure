import p5 from 'p5';

export const lorenzAttractor = (p: p5) => {
  let x = 0.01;
  let y = 0;
  let z = 0;

  let a = 10;
  let b = 28;
  let c = 8 / 3;

  let points: p5.Vector[] = [];

  p.setup = () => {
    p.createCanvas(p.windowWidth * 0.8, p.windowHeight * 0.8, p.WEBGL);
    p.colorMode(p.HSB);
  };

  p.draw = () => {
    let dt = 0.01;
    let dx = (a * (y - x)) * dt;
    let dy = (x * (b - z) - y) * dt;
    let dz = (x * y - c * z) * dt;
    x += dx;
    y += dy;
    z += dz;

    points.push(p.createVector(x, y, z));

    p.background(0);
    p.scale(5);
    p.noFill();

    let hu = 0;
    p.beginShape();
    for (let v of points) {
      p.stroke(hu, 255, 255);
      p.vertex(v.x, v.y, v.z);
      hu += 0.1;
      if (hu > 255) hu = 0;
    }
    p.endShape();
    
    p.rotateY(p.frameCount * 0.01);
    
    if (points.length > 3000) points.splice(0, 1);
  };
};
