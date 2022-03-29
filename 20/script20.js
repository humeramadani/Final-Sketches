let x = [0, 0],
  y = [0, 0],
  segLength = 100;

function setup() {
  createCanvas(1000, 1000);
  background(0);
  strokeWeight(2.0);
  stroke(255,0,0, 100);
}

function draw() {
  
  dragSegment(0, mouseX, mouseY);
  dragSegment(1, x[0], y[0]);
}

function dragSegment(i, xin, yin) {
  const dx = xin - x[i];
  const dy = yin - y[i];
  const angle = atan2(dy, dx);
  x[i] = xin - cos(angle) * segLength;
  y[i] = yin - sin(angle) * segLength;
  segment(x[i], y[i], angle);
}

function segment(x, y, a) {
  push();
  translate(x, y);
  rotate(a);
  line(0, 0, segLength, 0);
  pop();
}
