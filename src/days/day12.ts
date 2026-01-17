import p5 from 'p5';

export const simpleFluid = (p: p5) => {
  let particles: FluidParticle[] = [];

  p.setup = () => {
    p.createCanvas(p.windowWidth * 0.8, p.windowHeight * 0.8);
    p.background(0);
  };

  p.draw = () => {
    p.background(0, 20);
    if (p.mouseIsPressed) {
      for (let i = 0; i < 5; i++) {
        particles.push(new FluidParticle(p, p.mouseX, p.mouseY));
      }
    }

    for (let i = particles.length - 1; i >= 0; i--) {
      particles[i].update();
      particles[i].show();
      if (particles[i].finished()) {
        particles.splice(i, 1);
      }
    }
  };

  class FluidParticle {
    p: p5;
    pos: p5.Vector;
    vel: p5.Vector;
    acc: p5.Vector;
    alpha: number;

    constructor(p: p5, x: number, y: number) {
      this.p = p;
      this.pos = p.createVector(x, y);
      this.vel = p.createVector(p.random(-1, 1), p.random(-1, 1));
      this.acc = p.createVector(0, 0);
      this.alpha = 255;
    }

    finished() {
      return this.alpha < 0;
    }

    update() {
      this.vel.add(this.acc);
      this.pos.add(this.vel);
      this.alpha -= 5;
    }

    show() {
      this.p.noStroke();
      this.p.fill(0, 255, 204, this.alpha);
      this.p.ellipse(this.pos.x, this.pos.y, 16);
    }
  }
};
