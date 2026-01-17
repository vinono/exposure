import p5 from 'p5';

export const sineWaves = (p: p5) => {
  let offset = 0;

  p.setup = () => {
    p.createCanvas(p.windowWidth * 0.8, p.windowHeight * 0.8);
  };

  p.draw = () => {
    p.background(0);
    p.stroke(0, 255, 204, 150);
    p.noFill();

    for (let i = 0; i < 10; i++) {
      p.beginShape();
      let yOffset = i * 40 + p.height / 4;
      for (let x = 0; x <= p.width; x += 10) {
        let angle = offset + x * 0.01 + i * 0.5;
        let y = yOffset + Math.sin(angle) * 50;
        p.vertex(x, y);
      }
      p.endShape();
    }
    offset += 0.05;
  };
};
