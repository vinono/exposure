import p5 from 'p5';

export const kaleidoscope = (p: p5) => {
  let symmetry = 6;
  let angle = 360 / symmetry;

  p.setup = () => {
    p.createCanvas(p.windowWidth * 0.8, p.windowHeight * 0.8);
    p.angleMode(p.DEGREES);
    p.background(0);
  };

  p.draw = () => {
    p.translate(p.width / 2, p.height / 2);

    if (p.mouseX > 0 && p.mouseX < p.width && p.mouseY > 0 && p.mouseY < p.height) {
      let mx = p.mouseX - p.width / 2;
      let my = p.mouseY - p.height / 2;
      let pmx = p.pmouseX - p.width / 2;
      let pmy = p.pmouseY - p.height / 2;

      if (p.mouseIsPressed) {
        for (let i = 0; i < symmetry; i++) {
          p.rotate(angle);
          p.stroke(0, 255, 204, 100);
          p.strokeWeight(4);
          p.line(mx, my, pmx, pmy);
          p.push();
          p.scale(1, -1);
          p.line(mx, my, pmx, pmy);
          p.pop();
        }
      }
    }
  };
};
