class CyberBackground {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;

  margin = 40;

  constructor(el: HTMLCanvasElement) {
    this.canvas = el;
    this.ctx = this.canvas.getContext("2d");
    this.init();
  }

  init() {
    this.draw();
  }

  draw() {
    const { ctx, canvas } = this;
    const { width, height } = canvas;
    ctx.clearRect(0, 0, width, height);
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = "#fff";
    ctx.beginPath();

    for (let i = this.margin; i < width; i += this.margin) {
      for (let j = this.margin; j < height; j += this.margin) {
        const r = Math.random() * 1;
        ctx.moveTo(i + r, j);
        ctx.arc(i, j, r, 0, 2 * Math.PI);
      }
    }

    ctx.fill();

    ctx.beginPath();

    for (let i = this.margin; i < width; i += this.margin) {
      for (let j = this.margin; j < height; j += this.margin) {
        const r = Math.random() * 3 + 1;
        ctx.moveTo(i + r, j);
        ctx.arc(i, j, r, 0, 2 * Math.PI);
      }
    }

    ctx.strokeStyle = "rgba(255, 255, 255, .2)";

    for (let i = this.margin; i < width; i += this.margin) {
      ctx.moveTo(i, 0);
      ctx.lineTo(i, height);
    }

    for (let i = this.margin; i < height; i += this.margin) {
      ctx.moveTo(0, i);
      ctx.lineTo(width, i);
    }

    ctx.strokeStyle = "rgba(255,255,255,0.08)";

    ctx.stroke();

    ctx.beginPath();
  }
}

export function drawBg(el: HTMLCanvasElement) {
  new CyberBackground(el);
}
