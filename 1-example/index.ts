class Point {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  getDist() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}

const p = new Point(3, 4);
const dist = p.getDist();
alert("Hypotenus is: " + dist);