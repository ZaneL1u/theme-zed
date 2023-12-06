interface Theme {
  circleColor: string;
  lineColor: string;
}

class CyberBackground {
  private ctx: CanvasRenderingContext2D;
  private margin: number = 40;

  constructor(
    private canvas: HTMLCanvasElement,
    private theme?: Theme,
  ) {
    this.ctx = this.canvas.getContext("2d");
    this.init();
  }

  get w(): number {
    return this.canvas.width;
  }

  get h(): number {
    return this.canvas.height;
  }

  private init() {
    this.drawBackground();
  }

  private drawBackground() {
    this.drawCircles();
    this.drawLines();
  }

  private drawCircles() {
    this.ctx.beginPath();
    this.ctx.fillStyle = "#fff";
    for (let i = this.margin; i < this.w; i += this.margin) {
      for (let j = this.margin; j < this.h; j += this.margin) {
        this.drawCircle(i, j);
      }
    }
    this.ctx.fill();
    this.ctx.beginPath();

    this.ctx.strokeStyle = "rgba(255,255,255,0.08)";
    for (let i = this.margin; i < this.w; i += this.margin) {
      for (let j = this.margin; j < this.h; j += this.margin) {
        this.drawCircle(i, j, Math.random() * 3 + 1);
      }
    }
    this.ctx.stroke();
    this.ctx.beginPath();
  }

  private drawCircle(x: number, y: number, radius = Math.random() * 1) {
    this.ctx.moveTo(x + radius, y);
    this.ctx.arc(x, y, radius, 0, 2 * Math.PI);
  }

  private drawLines() {
    this.ctx.beginPath();
    this.ctx.strokeStyle = this.theme?.lineColor ?? "rgba(255, 255, 255, 0.08)";
    this.drawVerticalLines();
    this.drawHorizontalLines();
    this.ctx.stroke();
  }

  private drawVerticalLines() {
    for (let i = this.margin; i < this.w; i += this.margin) {
      this.ctx.moveTo(i, 0);
      this.ctx.lineTo(i, this.h);
    }
  }

  private drawHorizontalLines() {
    for (let j = this.margin; j < this.h; j += this.margin) {
      this.ctx.moveTo(0, j);
      this.ctx.lineTo(this.w, j);
    }
  }
}

export function drawBg(el: HTMLCanvasElement) {
  new CyberBackground(el);
}
