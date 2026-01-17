import p5 from 'p5';

export const brownianWalk = (p: p5) => {
  let x: number, y: number;
  let px: number, py: number;

  p.setup = () => {
    p.createCanvas(p.windowWidth * 0.8, p.windowHeight * 0.8);
    p.background(0);
    x = p.width / 2;
    y = p.height / 2;
    px = x;
    py = y;
  };

  p.draw = () => {
    p.stroke(0, 255, 204, 50);
    p.strokeWeight(2);
    
    for (let i = 0; i < 10; i++) {
        x += p.random(-10, 10);
        y += p.random(-10, 10);
        
        // Constrain to screen
        x = p.constrain(x, 0, p.width);
        y = p.constrain(y, 0, p.height);
        
        p.line(px, py, x, y);
        px = x;
        py = y;
    }
  };

  p.mouseClicked = () => {
    p.background(0);
    x = p.width / 2;
    y = p.height / 2;
    px = x;
    py = y;
  };
};
