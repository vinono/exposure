import p5 from 'p5';

export const pixelSorter = (p: p5) => {
  let img: p5.Image;

  p.setup = () => {
    p.createCanvas(p.windowWidth * 0.8, p.windowHeight * 0.8);
    // Create a random colorful image to sort
    img = p.createImage(200, 200);
    img.loadPixels();
    for (let i = 0; i < img.pixels.length; i += 4) {
      img.pixels[i] = p.random(255);
      img.pixels[i + 1] = p.random(255);
      img.pixels[i + 2] = p.random(255);
      img.pixels[i + 3] = 255;
    }
    img.updatePixels();
  };

  p.draw = () => {
    p.background(0);
    img.loadPixels();
    
    // Simple vertical sort
    for (let x = 0; x < img.width; x++) {
      let column: {r: number, g: number, b: number, a: number}[] = [];
      for (let y = 0; y < img.height; y++) {
        let index = (x + y * img.width) * 4;
        column.push({
          r: img.pixels[index],
          g: img.pixels[index + 1],
          b: img.pixels[index + 2],
          a: img.pixels[index + 3]
        });
      }
      
      // Sort by brightness
      column.sort((a, b) => (a.r + a.g + a.b) - (b.r + b.g + b.b));
      
      for (let y = 0; y < img.height; y++) {
        let index = (x + y * img.width) * 4;
        img.pixels[index] = column[y].r;
        img.pixels[index + 1] = column[y].g;
        img.pixels[index + 2] = column[y].b;
        img.pixels[index + 3] = column[y].a;
      }
    }
    img.updatePixels();
    
    p.image(img, p.width / 2 - 100, p.height / 2 - 100, 200, 200);
    p.noLoop();
  };
};
