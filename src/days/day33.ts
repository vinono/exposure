import p5 from 'p5';

export const remixFinal = (p: p5) => {
  let particles: any[] = [];
  let symmetry = 8;
  let angle = 360 / symmetry;

  p.setup = () => {
    p.createCanvas(p.windowWidth * 0.8, p.windowHeight * 0.8);
    p.angleMode(p.DEGREES);
    p.background(0);
  };

  p.draw = () => {
    p.background(0, 5);
    p.translate(p.width / 2, p.height / 2);

    if (p.frameCount % 2 === 0) {
      particles.push({
        pos: p.createVector(p.random(-100, 100), p.random(-100, 100)),
        vel: p5.Vector.random2D().mult(2),
        life: 255
      });
    }

    for (let i = particles.length - 1; i >= 0; i--) {
      let part = particles[i];
      part.pos.add(part.vel);
      part.life -= 2;

      for (let j = 0; j < symmetry; j++) {
        p.rotate(angle);
        p.stroke(0, 255, 204, part.life);
        p.strokeWeight(2);
        p.line(part.pos.x, part.pos.y, part.pos.x + 5, part.pos.y + 5);
      }

      if (part.life <= 0) particles.splice(i, 1);
    }
    
    if (particles.length > 500) particles.splice(0, 1);
  };
};
