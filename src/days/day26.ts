import p5 from 'p5';

export const smartRockets = (p: p5) => {
  let rockets: Rocket[] = [];
  let lifespan = 200;
  let count = 0;
  let target: p5.Vector;

  p.setup = () => {
    p.createCanvas(p.windowWidth * 0.8, p.windowHeight * 0.8);
    target = p.createVector(p.width / 2, 50);
    for (let i = 0; i < 25; i++) {
      rockets[i] = new Rocket(p);
    }
  };

  p.draw = () => {
    p.background(0);
    p.fill(0, 255, 204);
    p.ellipse(target.x, target.y, 16, 16);

    for (let rocket of rockets) {
      rocket.update();
      rocket.show();
    }

    count++;
    if (count === lifespan) {
      count = 0;
      for (let rocket of rockets) {
          rocket.pos = p.createVector(p.width / 2, p.height - 20);
          rocket.vel = p.createVector();
      }
    }
  };

  class Rocket {
    p: p5;
    pos: p5.Vector;
    vel: p5.Vector;
    acc: p5.Vector;

    constructor(p: p5) {
      this.p = p;
      this.pos = p.createVector(p.width / 2, p.height - 20);
      this.vel = p.createVector();
      this.acc = p.createVector(p.random(-0.1, 0.1), p.random(-0.1, 0));
    }

    update() {
      this.vel.add(this.acc);
      this.pos.add(this.vel);
      this.acc.mult(0.9);
      // Continuous random thrust
      this.acc.add(p5.Vector.random2D().mult(0.1));
    }

    show() {
      this.p.push();
      this.p.translate(this.pos.x, this.pos.y);
      this.p.rotate(this.vel.heading());
      this.p.fill(255, 150);
      this.p.noStroke();
      this.p.rect(0, 0, 10, 2);
      this.p.pop();
    }
  }
};
