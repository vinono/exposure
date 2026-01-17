import p5 from 'p5';

export const kineticType = (p: p5) => {
  // p5 usually needs a font file for textToPoints. We'll simulate it with random points in a text shape if we can,
  // p5 usually needs a font file for textToPoints. We'll simulate it with random points in a text shape if we can, 
  // or just use a simple interactive grid for this demo to ensure stability.
  
  p.setup = () => {
    p.createCanvas(p.windowWidth * 0.8, p.windowHeight * 0.8);
    p.textAlign(p.CENTER, p.CENTER);
    p.textSize(128);
    p.fill(255);
  };

  p.draw = () => {
    p.background(0);
    let time = p.frameCount * 0.05;
    
    for (let x = 0; x < p.width; x += 50) {
      for (let y = 0; y < p.height; y += 50) {
        let d = p.dist(p.mouseX, p.mouseY, x, y);
        let s = p.map(d, 0, 200, 2, 0.5, true);
        p.push();
        p.translate(x, y);
        p.scale(s);
        p.rotate(time + d * 0.01);
        p.fill(0, 255, 204, 150);
        p.text("P5", 0, 0);
        p.pop();
      }
    }
  };
};
