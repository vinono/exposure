import p5 from 'p5';

export const emojiPhysics = (p: p5) => {
  let emojis: Emoji[] = [];
  const list = ['🔥', '💧', '⚡️', '🌈', '🍄', '🦄'];

  p.setup = () => {
    p.createCanvas(p.windowWidth * 0.8, p.windowHeight * 0.8);
    p.textSize(32);
  };

  p.draw = () => {
    p.background(0);
    if (p.mouseIsPressed) {
      emojis.push(new Emoji(p, p.mouseX, p.mouseY, p.random(list)));
    }

    for (let i = emojis.length - 1; i >= 0; i--) {
      emojis[i].update();
      emojis[i].show();
      if (emojis[i].y > p.height + 50) {
        emojis.splice(i, 1);
      }
    }
    
    if (emojis.length > 100) emojis.splice(0, 1);
  };

  class Emoji {
    p: p5;
    x: number;
    y: number;
    vx: number;
    vy: number;
    grav: number;
    char: string;

    constructor(p: p5, x: number, y: number, char: string) {
      this.p = p;
      this.x = x;
      this.y = y;
      this.vx = p.random(-5, 5);
      this.vy = p.random(-10, -2);
      this.grav = 0.25;
      this.char = char;
    }

    update() {
      this.vy += this.grav;
      this.x += this.vx;
      this.y += this.vy;
    }

    show() {
      this.p.text(this.char, this.x, this.y);
    }
  }
};
