import p5 from 'p5';

export const isometricCity = (p: p5) => {
  p.setup = () => {
    p.createCanvas(p.windowWidth * 0.8, p.windowHeight * 0.8, p.WEBGL);
    p.noLoop();
  };

  p.draw = () => {
    p.background(0);
    p.orbitControl();
    p.rotateX(-p.PI / 6);
    p.rotateY(p.PI / 4);

    p.stroke(0, 255, 204);
    p.noFill();

    for (let x = -200; x <= 200; x += 50) {
      for (let z = -200; z <= 200; z += 50) {
        let h = p.noise(x * 0.01, z * 0.01) * 300;
        p.push();
        p.translate(x, -h / 2, z);
        p.box(40, h, 40);
        p.pop();
      }
    }
  };

  p.mouseClicked = () => p.redraw();
};
