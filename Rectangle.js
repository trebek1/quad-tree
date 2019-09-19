class Rectangle {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  intersects(range) {
    return !(
      range.x - range.w > this.x + this.w ||
      range.x + range.w < this.x - this.w ||
      range.y - range.h > this.y + this.h ||
      range.y + range.h < this.y - this.h
    );
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
