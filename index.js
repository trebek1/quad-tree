let qTree;

function setup() {
  createCanvas(400, 400);
}
let boundary = new Rectangle(200, 200, 200, 200);
qTree = new QuadTree(boundary, 5);

console.log(qTree);

// for (let i = 0; i < 500; i++) {
//   let p = new Point(
//     Math.random() * boundary.w * 2,
//     Math.random() * boundary.h * 2
//   );
//   qTree.insert(p);
// }
function draw() {
  if (mouseIsPressed) {
    for (let i = 0; i < 5; i++) {
      m = new Point(mouseX + random(-5, 5), mouseY + random(-5, 5));
      qTree.insert(m);
    }
  }
  background(0);
  qTree.show();
}
