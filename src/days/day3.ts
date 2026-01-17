import p5 from 'p5';

export const reactionDiffusion = (p: p5) => {
  let gridA: Float32Array;
  let gridB: Float32Array;
  let nextA: Float32Array;
  let nextB: Float32Array;

  const dA = 1.0;
  const dB = 0.5;
  const feed = 0.055;
  const k = 0.062;
  const w = 200;
  const h = 200;

  p.setup = () => {
    // Fix for "Canvas2D: Multiple readback operations..." warning
    p.createCanvas(w, h).elt.getContext('2d', { willReadFrequently: true });
    
    p.pixelDensity(1);
    
    gridA = new Float32Array(w * h).fill(1);
    gridB = new Float32Array(w * h).fill(0);
    nextA = new Float32Array(w * h).fill(1);
    nextB = new Float32Array(w * h).fill(0);

    // Seed
    for (let i = 90; i < 110; i++) {
      for (let j = 90; j < 110; j++) {
        gridB[i + j * w] = 1;
      }
    }
  };

  p.draw = () => {
    // Run simulation multiple times per frame for speed
    for (let n = 0; n < 8; n++) {
      for (let y = 1; y < h - 1; y++) {
        for (let x = 1; x < w - 1; x++) {
          const i = x + y * w;
          const a = gridA[i];
          const b = gridB[i];

          const lapA = 
            gridA[i] * -1 +
            (gridA[i - 1] + gridA[i + 1] + gridA[i - w] + gridA[i + w]) * 0.2 +
            (gridA[i - w - 1] + gridA[i - w + 1] + gridA[i + w - 1] + gridA[i + w + 1]) * 0.05;

          const lapB = 
            gridB[i] * -1 +
            (gridB[i - 1] + gridB[i + 1] + gridB[i - w] + gridB[i + w]) * 0.2 +
            (gridB[i - w - 1] + gridB[i - w + 1] + gridB[i + w - 1] + gridB[i + w + 1]) * 0.05;

          nextA[i] = a + (dA * lapA - a * b * b + feed * (1 - a));
          nextB[i] = b + (dB * lapB + a * b * b - (k + feed) * b);
          
          // Slight optimization: inline constrain
          if (nextA[i] < 0) nextA[i] = 0; else if (nextA[i] > 1) nextA[i] = 1;
          if (nextB[i] < 0) nextB[i] = 0; else if (nextB[i] > 1) nextB[i] = 1;
        }
      }
      // Swap buffers
      [gridA, nextA] = [nextA, gridA];
      [gridB, nextB] = [nextB, gridB];
    }

    p.loadPixels();
    for (let i = 0; i < w * h; i++) {
      const a = gridA[i];
      const b = gridB[i];
      let c = Math.floor((a - b) * 255);
      if (c < 0) c = 0; else if (c > 255) c = 255;
      
      const pix = i * 4;
      p.pixels[pix + 0] = c;
      p.pixels[pix + 1] = c;
      p.pixels[pix + 2] = c;
      p.pixels[pix + 3] = 255;
    }
    p.updatePixels();
  };
};
