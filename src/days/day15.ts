import p5 from 'p5';

export const mondrian = (p: p5) => {
  p.setup = () => {
    p.createCanvas(p.windowWidth * 0.8, p.windowHeight * 0.8);
    p.noLoop();
  };

  p.draw = () => {
    p.background(255);
    p.strokeWeight(8);
    p.stroke(0);
    divide(0, 0, p.width, p.height, 5);
  };

  function divide(x: number, y: number, w: number, h: number, depth: number) {
    if (depth > 0) {
      if (p.random() > 0.5) {
        let split = p.random(w * 0.3, w * 0.7);
        divide(x, y, split, h, depth - 1);
        divide(x + split, y, w - split, h, depth - 1);
      } else {
        let split = p.random(h * 0.3, h * 0.7);
        divide(x, y, w, split, depth - 1);
        divide(x, y + split, w, h - split, depth - 1);
      }
    } else {
      let r = p.random();
      if (r < 0.1) p.fill(255, 0, 0);
      else if (r < 0.2) p.fill(0, 0, 255);
      else if (r < 0.3) p.fill(255, 255, 0);
      else p.fill(255);
      p.rect(x, y, w, h);
    }
  }

  p.mouseClicked = () => p.redraw();
};
