import p5 from 'p5';

export const shapeMorphing = (p: p5) => {
  let circle: p5.Vector[] = [];
  let square: p5.Vector[] = [];
  let morph: p5.Vector[] = [];
  let state = false;

  p.setup = () => {
    p.createCanvas(p.windowWidth * 0.8, p.windowHeight * 0.8);
    for (let angle = 0; angle < 360; angle += 9) {
      let v = p5.Vector.fromAngle(p.radians(angle - 135));
      v.mult(100);
      circle.push(v);
      morph.push(p.createVector());
    }

    for (let x = -100; x < 100; x += 20) {
      square.push(p.createVector(x, -100));
    }
    for (let y = -100; y < 100; y += 20) {
      square.push(p.createVector(100, y));
    }
    for (let x = 100; x > -100; x -= 20) {
      square.push(p.createVector(x, 100));
    }
    for (let y = 100; y > -100; y -= 20) {
      square.push(p.createVector(-100, y));
    }
  };

  p.draw = () => {
    p.background(0);
    p.translate(p.width / 2, p.height / 2);
    p.strokeWeight(4);
    p.noFill();
    p.stroke(0, 255, 204);

    let target = state ? square : circle;
    for (let i = 0; i < morph.length; i++) {
      let v1 = morph[i];
      let v2 = target[i];
      v1.lerp(v2, 0.1);
    }

    p.beginShape();
    for (let v of morph) {
      p.vertex(v.x, v.y);
    }
    p.endShape(p.CLOSE);

    if (p.frameCount % 60 === 0) state = !state;
  };
};
