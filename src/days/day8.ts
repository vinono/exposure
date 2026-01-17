import p5 from 'p5';

export const perlinTerrain = (p: p5) => {
  let cols: number, rows: number;
  let scl = 20;
  let w = 1400;
  let h = 1000;
  let flying = 0;
  let terrain: number[][];

  p.setup = () => {
    p.createCanvas(p.windowWidth * 0.8, p.windowHeight * 0.8, p.WEBGL);
    cols = w / scl;
    rows = h / scl;
    terrain = Array.from({ length: cols }, () => new Array(rows));
  };

  p.draw = () => {
    flying -= 0.1;
    let yoff = flying;
    for (let y = 0; y < rows; y++) {
      let xoff = 0;
      for (let x = 0; x < cols; x++) {
        terrain[x][y] = p.map(p.noise(xoff, yoff), 0, 1, -100, 100);
        xoff += 0.2;
      }
      yoff += 0.2;
    }

    p.background(0);
    p.rotateX(Math.PI / 3);
    p.translate(-w / 2, -h / 2);

    for (let y = 0; y < rows - 1; y++) {
      p.beginShape(p.TRIANGLE_STRIP);
      for (let x = 0; x < cols; x++) {
        p.stroke(0, 255, 204, 100);
        p.noFill();
        p.vertex(x * scl, y * scl, terrain[x][y]);
        p.vertex(x * scl, (y + 1) * scl, terrain[x][y + 1]);
      }
      p.endShape();
    }
  };
};
