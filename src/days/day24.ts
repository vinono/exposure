import p5 from 'p5';

export const fftVisuals = (p: p5) => {
  let spectrum: number[] = [];

  p.setup = () => {
    p.createCanvas(p.windowWidth * 0.8, p.windowHeight * 0.8);
    for (let i = 0; i < 64; i++) spectrum[i] = 0;
  };

  p.draw = () => {
    p.background(0);
    p.stroke(0, 255, 204);
    p.noFill();

    let w = p.width / spectrum.length;
    for (let i = 0; i < spectrum.length; i++) {
      // Simulate frequency data with noise
      spectrum[i] = p.noise(i * 0.1, p.frameCount * 0.05) * p.height * 0.8;
      
      let x = i * w;
      let h = spectrum[i];
      p.rect(x, p.height - h, w - 2, h);
      
      // Mirror
      p.rect(x, 0, w - 2, h * 0.2);
    }
  };
};
