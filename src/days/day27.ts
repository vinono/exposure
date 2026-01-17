import p5 from 'p5';

export const neuralWeb = (p: p5) => {
  let nodes: Node[] = [];

  p.setup = () => {
    p.createCanvas(p.windowWidth * 0.8, p.windowHeight * 0.8);
    for (let i = 0; i < 30; i++) {
        nodes.push(new Node(p));
    }
  };

  p.draw = () => {
    p.background(0);
    
    for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
            let d = p.dist(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
            if (d < 150) {
                p.stroke(0, 255, 204, p.map(d, 0, 150, 255, 0));
                p.line(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
            }
        }
    }

    for (let node of nodes) {
      node.update();
      node.show();
    }
  };

  class Node {
    p: p5;
    x: number;
    y: number;
    vx: number;
    vy: number;

    constructor(p: p5) {
      this.p = p;
      this.x = p.random(p.width);
      this.y = p.random(p.height);
      this.vx = p.random(-0.5, 0.5);
      this.vy = p.random(-0.5, 0.5);
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > this.p.width) this.vx *= -1;
      if (this.y < 0 || this.y > this.p.height) this.vy *= -1;
    }

    show() {
      this.p.noStroke();
      this.p.fill(255);
      this.p.ellipse(this.x, this.y, 4, 4);
    }
  }
};
