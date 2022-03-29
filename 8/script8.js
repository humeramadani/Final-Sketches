let img;

function preload() {
  img = loadImage("assets/g.jpeg");
}

function setup() {
  createCanvas(1000, 2000);
  image(img, 300, 200);
}

function draw() {
  let x1 = random(width);
  let y1 = random(height);
  let x2 = round(x1 + random(-30, 40));
  let y2 = round(y1 + random(-30, 40));

  set(x2, y2, get(x1, y1, 70, 70)); // x,y,obj
  updatePixels();
}