import p5 from 'p5';

export const stochasticTree = (p: p5) => {
  p.setup = () => {
    p.createCanvas(p.windowWidth * 0.8, p.windowHeight * 0.8);
    p.noLoop();
  };

  p.draw = () => {
    p.background(0);
    p.translate(p.width / 2, p.height);
    p.stroke(255, 150);
    branch(120);
  };

  function branch(h: number) {
    let sw = p.map(h, 2, 120, 1, 10);
    p.strokeWeight(sw);
    p.line(0, 0, 0, -h);
    p.translate(0, -h);
    h *= p.random(0.6, 0.8);

    if (h > 4) {
      let n = p.floor(p.random(1, 4));
      for (let i = 0; i < n; i++) {
        p.push();
        p.rotate(p.random(-p.PI / 4, p.PI / 4));
        branch(h);
        p.pop();
      }
    }
  }

  p.mouseClicked = () => p.redraw();
};
