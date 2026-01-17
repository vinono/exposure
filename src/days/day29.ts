import p5 from 'p5';

export const physarum = (p: p5) => {
  let agents: Agent[] = [];

  p.setup = () => {
    p.createCanvas(p.windowWidth * 0.8, p.windowHeight * 0.8);
    p.background(0);
    for (let i = 0; i < 200; i++) {
      agents.push(new Agent(p));
    }
  };

  p.draw = () => {
    p.background(0, 10);
    for (let agent of agents) {
      agent.update();
      agent.show();
    }
  };

  class Agent {
    p: p5;
    x: number;
    y: number;
    angle: number;

    constructor(p: p5) {
      this.p = p;
      this.x = p.random(p.width);
      this.y = p.random(p.height);
      this.angle = p.random(p.TWO_PI);
    }

    update() {
      // Slime mould behavior: wander with slight noise
      this.angle += (this.p.noise(this.x * 0.01, this.y * 0.01) - 0.5) * 0.5;
      this.x += Math.cos(this.angle) * 2;
      this.y += Math.sin(this.angle) * 2;

      if (this.x < 0) this.x = this.p.width;
      if (this.x > this.p.width) this.x = 0;
      if (this.y < 0) this.y = this.p.height;
      if (this.y > this.p.height) this.y = 0;
    }

    show() {
      this.p.stroke(0, 255, 204, 150);
      this.p.point(this.x, this.y);
    }
  }
};
