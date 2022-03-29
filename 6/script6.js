let angle = 0;

function setup() {
  createCanvas(1000, 1000);
  background(255);
  noStroke();
  fill(0, 102);
}

function draw() {
  // Draw only when mouse is pressed
  if (mouseIsPressed === true) {
    angle += 4;
    let val = cos(radians(angle)) * 20.0;
    for (let a = 0; a < 360; a += 75) {
      let xoff = cos(radians(a)) * val;
      let yoff = sin(radians(a)) * val;
      fill(0);
      ellipse(mouseX + xoff, mouseY + yoff, val, val);
    }
    fill(255);
    ellipse(mouseX, mouseY, 5, 5);
  }
}