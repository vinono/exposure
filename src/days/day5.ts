import p5 from 'p5';

export const doublePendulum = (p: p5) => {
  let r1 = 125;
  let r2 = 125;
  let m1 = 10;
  let m2 = 10;
  let a1 = Math.PI / 2;
  let a2 = Math.PI / 2;
  let a1_v = 0;
  let a2_v = 0;
  let g = 1;

  let px2 = -1;
  let py2 = -1;
  let graphics: p5.Graphics;

  p.setup = () => {
    p.createCanvas(p.windowWidth * 0.8, p.windowHeight * 0.8);
    graphics = p.createGraphics(p.width, p.height);
    graphics.background(0);
  };

  p.draw = () => {
    let num1 = -g * (2 * m1 + m2) * Math.sin(a1);
    let num2 = -m2 * g * Math.sin(a1 - 2 * a2);
    let num3 = -2 * Math.sin(a1 - a2) * m2;
    let num4 = a2_v * a2_v * r2 + a1_v * a1_v * r1 * Math.cos(a1 - a2);
    let den = r1 * (2 * m1 + m2 - m2 * Math.cos(2 * a1 - 2 * a2));
    let a1_a = (num1 + num2 + num3 * num4) / den;

    num1 = 2 * Math.sin(a1 - a2);
    num2 = a1_v * a1_v * r1 * (m1 + m2);
    num3 = g * (m1 + m2) * Math.cos(a1);
    num4 = a2_v * a2_v * r2 * m2 * Math.cos(a1 - a2);
    den = r2 * (2 * m1 + m2 - m2 * Math.cos(2 * a1 - 2 * a2));
    let a2_a = (num1 * (num2 + num3 + num4)) / den;

    p.image(graphics, 0, 0);
    p.translate(p.width / 2, 200);
    p.stroke(255);
    p.strokeWeight(2);

    let x1 = r1 * Math.sin(a1);
    let y1 = r1 * Math.cos(a1);

    let x2 = x1 + r2 * Math.sin(a2);
    let y2 = y1 + r2 * Math.cos(a2);

    p.line(0, 0, x1, y1);
    p.fill(255);
    p.ellipse(x1, y1, m1, m1);

    p.line(x1, y1, x2, y2);
    p.fill(255);
    p.ellipse(x2, y2, m2, m2);

    a1_v += a1_a;
    a2_v += a2_a;
    a1 += a1_v;
    a2 += a2_v;

    // graphics.translate(p.width / 2, 200);
    graphics.strokeWeight(1);
    graphics.stroke(0, 255, 204, 100);
    if (px2 !== -1) {
      graphics.line(px2 + p.width / 2, py2 + 200, x2 + p.width / 2, y2 + 200);
    }

    px2 = x2;
    py2 = y2;
  };
};
