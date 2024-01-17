let img;

function preload() {
  img = loadImage("assets/vpulse.jpeg");
}

function setup() {
  createCanvas(1000, 2000);
  image(img, 300, 200);
}

function draw() {
  let x1 = random(width);
  let y1 = random(height);
  let x2 = round(x1 + random(-20, 10));
  let y2 = round(y1 + random(-20, 10));

  set(x2, y2, get(x1, y1, 50, 50)); // x,y,obj
  updatePixels();
}
