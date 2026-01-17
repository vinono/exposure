import p5 from 'p5';

export const voronoi = (p: p5) => {
  let points: p5.Vector[] = [];
  const numPoints = 25;

  p.setup = () => {
    p.createCanvas(p.windowWidth * 0.8, p.windowHeight * 0.8);
    for (let i = 0; i < numPoints; i++) {
      points.push(p.createVector(p.random(p.width), p.random(p.height)));
    }
    p.noLoop();
  };

  p.draw = () => {
    p.background(0);
    p.loadPixels();

    for (let x = 0; x < p.width; x++) {
      for (let y = 0; y < p.height; y++) {
        let minDist = Infinity;
        let minIndex = -1;

        for (let i = 0; i < points.length; i++) {
          let d = p.dist(x, y, points[i].x, points[i].y);
          if (d < minDist) {
            minDist = d;
            minIndex = i;
          }
        }

        let pix = (x + y * p.width) * 4;
        let r = p.map(minIndex, 0, points.length, 50, 255);
        let g = p.map(minDist, 0, 100, 255, 0);
        let b = p.map(minIndex, 0, points.length, 255, 50);

        p.pixels[pix + 0] = r;
        p.pixels[pix + 1] = g;
        p.pixels[pix + 2] = b;
        p.pixels[pix + 3] = 255;
      }
    }
    p.updatePixels();

    p.stroke(0);
    p.fill(255);
    for (let pt of points) {
      p.ellipse(pt.x, pt.y, 4, 4);
    }
  };

  p.mouseClicked = () => {
    points.push(p.createVector(p.mouseX, p.mouseY));
    p.redraw();
  };
};
