import p5 from 'p5';

export const flowField = (p: p5) => {
  let inc = 0.1;
  let scl = 10;
  let cols: number, rows: number;
  let zoff = 0;
  let particles: Particle[] = [];
  let flowfield: p5.Vector[];

  p.setup = () => {
    p.createCanvas(p.windowWidth * 0.8, p.windowHeight * 0.8);
    cols = p.floor(p.width / scl);
    rows = p.floor(p.height / scl);
    flowfield = new Array(cols * rows);

    for (let i = 0; i < 500; i++) {
      particles[i] = new Particle(p);
    }
    p.background(0);
  };

  p.draw = () => {
    let yoff = 0;
    for (let y = 0; y < rows; y++) {
      let xoff = 0;
      for (let x = 0; x < cols; x++) {
        let index = x + y * cols;
        let angle = p.noise(xoff, yoff, zoff) * p.TWO_PI * 4;
        let v = p5.Vector.fromAngle(angle);
        v.setMag(1);
        flowfield[index] = v;
        xoff += inc;
      }
      yoff += inc;
    }
    zoff += 0.003;

    for (let i = 0; i < particles.length; i++) {
      particles[i].follow(flowfield, cols, scl);
      particles[i].update();
      particles[i].edges();
      particles[i].show();
    }
  };

  class Particle {
    pos: p5.Vector;
    vel: p5.Vector;
    acc: p5.Vector;
    maxspeed: number;
    prevPos: p5.Vector;
    p: p5;

    constructor(p: p5) {
      this.p = p;
      this.pos = p.createVector(p.random(p.width), p.random(p.height));
      this.vel = p.createVector(0, 0);
      this.acc = p.createVector(0, 0);
      this.maxspeed = 2;
      this.prevPos = this.pos.copy();
    }

    update() {
      this.vel.add(this.acc);
      this.vel.limit(this.maxspeed);
      this.pos.add(this.vel);
      this.acc.mult(0);
    }

    follow(vectors: p5.Vector[], cols: number, scl: number) {
      let x = this.p.floor(this.pos.x / scl);
      let y = this.p.floor(this.pos.y / scl);
      let index = x + y * cols;
      let force = vectors[index];
      this.applyForce(force);
    }

    applyForce(force: p5.Vector) {
      this.acc.add(force);
    }

    show() {
      this.p.stroke(255, 10);
      this.p.strokeWeight(1);
      this.p.line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
      this.updatePrev();
    }

    updatePrev() {
      this.prevPos.x = this.pos.x;
      this.prevPos.y = this.pos.y;
    }

    edges() {
      if (this.pos.x > this.p.width) {
        this.pos.x = 0;
        this.updatePrev();
      }
      if (this.pos.x < 0) {
        this.pos.x = this.p.width;
        this.updatePrev();
      }
      if (this.pos.y > this.p.height) {
        this.pos.y = 0;
        this.updatePrev();
      }
      if (this.pos.y < 0) {
        this.pos.y = this.p.height;
        this.updatePrev();
      }
    }
  }
};
