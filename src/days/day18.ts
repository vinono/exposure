import p5 from 'p5';

export const delaunaySimple = (p: p5) => {
  let points: p5.Vector[] = [];

  p.setup = () => {
    p.createCanvas(p.windowWidth * 0.8, p.windowHeight * 0.8);
    for (let i = 0; i < 50; i++) {
      points.push(p.createVector(p.random(p.width), p.random(p.height)));
    }
  };

  p.draw = () => {
    p.background(0);
    p.stroke(255, 50);
    p.noFill();

    // Simplified connection logic to simulate Delaunay-style mesh
    for (let i = 0; i < points.length; i++) {
      let neighbors: {d: number, pt: p5.Vector}[] = [];
      for (let j = 0; j < points.length; j++) {
        if (i === j) continue;
        let d = p.dist(points[i].x, points[i].y, points[j].x, points[j].y);
        if (d < 150) {
          neighbors.push({d, pt: points[j]});
        }
      }
      
      neighbors.sort((a, b) => a.d - b.d);
      for (let k = 0; k < Math.min(3, neighbors.length); k++) {
        p.line(points[i].x, points[i].y, neighbors[k].pt.x, neighbors[k].pt.y);
      }
    }

    for (let pt of points) {
      p.fill(0, 255, 204);
      p.noStroke();
      p.ellipse(pt.x, pt.y, 4, 4);
      
      // Brownian motion
      pt.x += p.random(-1, 1);
      pt.y += p.random(-1, 1);
    }
  };
};
