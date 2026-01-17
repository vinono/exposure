import p5 from 'p5';

export const metaballs = (p: p5) => {
  let blobs: Blob[] = [];

  p.setup = () => {
    p.createCanvas(320, 240); // Smaller canvas for performance since metaballs are heavy
    for (let i = 0; i < 5; i++) {
      blobs.push(new Blob(p));
    }
  };

  p.draw = () => {
    p.background(0);
    p.loadPixels();
    for (let x = 0; x < p.width; x++) {
      for (let y = 0; y < p.height; y++) {
        let sum = 0;
        for (let i = 0; i < blobs.length; i++) {
          let d = p.dist(x, y, blobs[i].x, blobs[i].y);
          sum += (10 * blobs[i].r) / d;
        }
        let pix = (x + y * p.width) * 4;
        p.pixels[pix + 0] = sum;
        p.pixels[pix + 1] = p.constrain(sum, 0, 255);
        p.pixels[pix + 2] = 204;
        p.pixels[pix + 3] = 255;
      }
    }
    p.updatePixels();

    for (let i = 0; i < blobs.length; i++) {
      blobs[i].update();
    }
  };

  class Blob {
    p: p5;
    x: number;
    y: number;
    r: number;
    xspeed: number;
    yspeed: number;

    constructor(p: p5) {
      this.p = p;
      this.x = p.random(p.width);
      this.y = p.random(p.height);
      this.r = p.random(40, 80);
      this.xspeed = p.random(-2, 2);
      this.yspeed = p.random(-2, 2);
    }

    update() {
      this.x += this.xspeed;
      this.y += this.yspeed;
      if (this.x > this.p.width || this.x < 0) this.xspeed *= -1;
      if (this.y > this.p.height || this.y < 0) this.yspeed *= -1;
    }
  }
};
