
let t = 0; // time variable

function setup() {
  createCanvas(1000, 1000);
  noStroke();
  fill(190, 100, 160);
}


function draw() {
  background(10, 10); // translucent background (creates trails)

  rect(0, 0, 1000, 200);
  rect(0, 0, 200, 1000);
  rect(800, 0, 200, 1000);
  rect(350, 350, 1000, 20);
  rect(350, 350, 100, 400);
  rect(350, 700, 250, 100);
  rect(350, 350, 550, 200);
  rect(0, 970, 1000, 200);

  // make a x and y grid of ellipses
  for (let x = 0; x <= width; x = x + 30) {
    for (let y = 0; y <= height; y = y + 30) {
      // starting point of each circle depends on mouse position
      const xAngle = map(mouseX, 0, width, -4 * PI, 4 * PI, true);
      const yAngle = map(mouseY, 0, height, -4 * PI, 4 * PI, true);
      // and also varies based on the particle's location
      const angle = xAngle * (x / width) + yAngle * (y / height);

      // each particle moves in a circle
      const myX = x + 20 * cos(2 * PI * t + angle);
      const myY = y + 20 * sin(2 * PI * t + angle);

      square(myX, myY, 10); // draw particle
    }
  }

  t = t + 0.01; // update time
}