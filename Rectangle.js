class Rectangle {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  contains({ x, y }) {
    return (
      x >= this.x - this.w &&
      x <= this.x + this.w &&
      y >= this.y - this.h &&
      y <= this.y + this.h
    );
  }
}
