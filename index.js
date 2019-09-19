let qTree;

function setup() {
  createCanvas(400, 400);
}
let boundary = new Rectangle(200, 200, 200, 200);
qTree = new QuadTree(boundary, 5);

console.log(qTree);

for (let i = 0; i < 300; i++) {
  let p = new Point(
    Math.random() * boundary.w * 2,
    Math.random() * boundary.h * 2
  );
  qTree.insert(p);
}
function draw() {
  noLoop();
  //   if (mouseIsPressed) {
  //     for (let i = 0; i < 5; i++) {
  //       m = new Point(mouseX + random(-5, 5), mouseY + random(-5, 5));
  //       qTree.insert(m);
  //     }
  //   }
  background(0);
  qTree.show();

  stroke(0, 255, 0);
  rectMode(CENTER);
  let range = new Rectangle(300, 300, 75, 50);
  rect(300, 300, 150, 100);
  //   let range = new Rectangle(mouseX, mouseY, 75, 50);
  //   rect(mouseX, mouseY, 150, 100);
  let points = qTree.query(range, []);

  for (let p of points) {
    strokeWeight(4);
    point(p.x, p.y);
  }
  console.log("what is count ", qTree.getCount());
}
