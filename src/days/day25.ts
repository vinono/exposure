import p5 from 'p5';

export const asciiArt = (p: p5) => {
  const chars = "$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\\|()1{}[]?-_+~<>i!lI;:,\"^`'. ";
  let resolution = 10;

  p.setup = () => {
    p.createCanvas(p.windowWidth * 0.8, p.windowHeight * 0.8);
    p.textFont('monospace');
    p.textSize(resolution);
  };

  p.draw = () => {
    p.background(0);
    p.fill(0, 255, 204);
    
    for (let x = 0; x < p.width; x += resolution) {
      for (let y = 0; y < p.height; y += resolution) {
        let n = p.noise(x * 0.005, y * 0.005, p.frameCount * 0.01);
        let charIndex = p.floor(p.map(n, 0, 1, chars.length - 1, 0));
        p.text(chars[charIndex], x, y);
      }
    }
  };
};
