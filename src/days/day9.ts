import p5 from 'p5';

export const phyllotaxis = (p: p5) => {
  let n = 0;
  let c = 8;

  p.setup = () => {
    p.createCanvas(p.windowWidth * 0.8, p.windowHeight * 0.8);
    p.colorMode(p.HSB);
    p.background(0);
  };

  p.draw = () => {
    let a = n * 137.5;
    let r = c * Math.sqrt(n);
    let x = r * Math.cos(p.radians(a)) + p.width / 2;
    let y = r * Math.sin(p.radians(a)) + p.height / 2;

    p.fill((a - r) % 255, 255, 255);
    p.noStroke();
    p.ellipse(x, y, 6, 6);
    n++;

    if (n > 2000) p.noLoop();
  };
};
