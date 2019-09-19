let count = 0;

class QuadTree {
  constructor(boundary, capacity) {
    this.boundary = boundary;
    this.capacity = capacity;
    this.points = [];
    this.divided = false;
  }

  // take a rectangle and subdivide it
  subdivide() {
    let { x, y, w, h } = this.boundary;
    let ne = new Rectangle(x + w / 2, y - h / 2, w / 2, h / 2);
    this.ne = new QuadTree(ne, this.capacity);
    let nw = new Rectangle(x - w / 2, y - h / 2, w / 2, h / 2);
    this.nw = new QuadTree(nw, this.capacity);
    let se = new Rectangle(x + w / 2, y + h / 2, w / 2, h / 2);
    this.se = new QuadTree(se, this.capacity);
    let sw = new Rectangle(x - w / 2, y + h / 2, w / 2, h / 2);
    this.sw = new QuadTree(sw, this.capacity);
    this.divided = true;
  }

  // insert a point in the tree
  insert(point) {
    if (!this.boundary.contains(point)) {
      return false;
    }
    if (this.points.length < this.capacity) {
      this.points.push(point);
      return true;
    } else {
      if (!this.divided) {
        this.subdivide();
      }
      if (this.ne.insert(point)) {
        return true;
      } else if (this.nw.insert(point)) {
        return true;
      } else if (this.se.insert(point)) {
        return true;
      } else if (this.sw.insert(point)) {
        return true;
      }
    }
  }

  getCount() {
    return count;
  }

  query(range, found) {
    if (!found) {
      found = [];
    }
    if (!this.boundary.intersects(range)) {
      return;
    } else {
      count++;
      // console.log("what is count ? ", count);
      for (let p of this.points) {
        if (range.contains(p)) {
          found.push(p);
        }
      }
      if (this.divided) {
        this.nw.query(range, found);
        this.ne.query(range, found);
        this.sw.query(range, found);
        this.se.query(range, found);
      }
      return found;
    }
  }

  show() {
    stroke(255);
    strokeWeight(1);
    noFill();
    rectMode(CENTER);
    rect(
      this.boundary.x,
      this.boundary.y,
      this.boundary.w * 2,
      this.boundary.h * 2
    );
    if (this.divided) {
      this.nw.show();
      this.ne.show();
      this.se.show();
      this.sw.show();
    }
    for (let p of this.points) {
      strokeWeight(4);
      point(p.x, p.y);
    }
  }
}
