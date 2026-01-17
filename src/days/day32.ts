import p5 from 'p5';

export const gravityWells = (p: p5) => {
  let particles: Particle[] = [];
  let points: p5.Vector[] = [];

  p.setup = () => {
    p.createCanvas(p.windowWidth * 0.8, p.windowHeight * 0.8);
    for (let i = 0; i < 3; i++) {
        points.push(p.createVector(p.random(p.width || 800), p.random(p.height || 600)));
    }
    for (let i = 0; i < 200; i++) {
      particles.push(new Particle(p));
    }
  };

  p.draw = () => {
    p.background(0, 50);
    p.noStroke();
    p.fill(0, 255, 204, 100);
    for (let pt of points) {
        p.ellipse(pt.x, pt.y, 10, 10);
    }

    for (let particle of particles) {
      particle.attract(points);
      particle.update();
      particle.show();
    }
  };

  class Particle {
    p: p5;
    pos: p5.Vector;
    vel: p5.Vector;
    acc: p5.Vector;

    constructor(p: p5) {
      this.p = p;
      this.pos = p.createVector(p.random(p.width || 800), p.random(p.height || 600));
      this.vel = p5.Vector.random2D();
      this.acc = p.createVector();
    }

    attract(targets: p5.Vector[]) {
        for (let target of targets) {
            let force = p5.Vector.sub(target, this.pos);
            let d = force.mag();
            
            // Safety: if d is NaN or 0, skip this target or nudge it
            if (isNaN(d) || d < 0.1) continue;

            d = p.constrain(d, 5, 100);
            force.normalize();
            let strength = 0.5 / (d * d);
            force.mult(strength * 50);
            this.acc.add(force);
        }
    }

    update() {
      this.vel.add(this.acc);
      this.vel.limit(5); // Prevent extreme speeds
      this.pos.add(this.vel);
      this.acc.mult(0);

      // Bounce/Wrap edges to keep particles in view and prevent NaN at infinity
      if (this.pos.x < 0 || this.pos.x > this.p.width) {
          this.vel.x *= -1;
          this.pos.x = this.p.constrain(this.pos.x, 0, this.p.width);
      }
      if (this.pos.y < 0 || this.pos.y > this.p.height) {
          this.vel.y *= -1;
          this.pos.y = this.p.constrain(this.pos.y, 0, this.p.height);
      }
    }

    show() {
      this.p.stroke(255, 100);
      this.p.point(this.pos.x, this.pos.y);
    }
  }
};
