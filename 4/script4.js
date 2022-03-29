let squareSize;
let lineWidth;
let randomColor;

function setup(){
	createCanvas (1000,1000);
	background(0);
    frameRate(2);
}
function draw(){

	lineWidth=random(4,30);
	squareSize=random(5,600);
    r=random(0,255);
    g=random(0,255);
    b=random(0,255);
    x=random(0,1000);
    y=random(0,1000);


    rectMode(CENTER);
    strokeWeight(lineWidth);
fill(r,g,b);
    text('G',x, y , squareSize);
    textSize(squareSize);

    rectMode(CENTER);
    strokeWeight(lineWidth);
   fill(r,g,b,50);
     text('G',x, y , squareSize);
     textSize(squareSize);

    rectMode(CENTER);
    strokeWeight(lineWidth);
   fill(r,g,b,10);
     text('G',x, y , squareSize);
     textSize(squareSize);

    rectMode(CENTER);
    strokeWeight(lineWidth);
   fill(r,g,b,20);
   text('G',x, y , squareSize);
    textSize(squareSize);

    rectMode(CENTER);
    strokeWeight(lineWidth);
   fill(r,g,b,30);
    text('G',x, y , squareSize);
     textSize(squareSize);

    rectMode(CENTER);
    strokeWeight(lineWidth);
  fill(r,g,b,50);
    text('G',x, y , squareSize);
     textSize(squareSize);

    rectMode(CENTER);
    strokeWeight(lineWidth);
   fill(r,g,b,40);
   text('G',x, y , squareSize);
     textSize(squareSize);

    rectMode(CENTER);
    strokeWeight(lineWidth);
   fill(r,g,b,90);
     text('G',x, y , squareSize);
     textSize(squareSize);

    rectMode(CENTER);
    strokeWeight(lineWidth);
  fill(r,g,b,10);
   text('G',x, y , squareSize);
     textSize(squareSize);

    rectMode(CENTER);
    strokeWeight(lineWidth);
  fill(r,g,b,50);
   text('G',x, y , squareSize);
     textSize(squareSize);

    rectMode(CENTER);
    strokeWeight(lineWidth);
  fill(r,g,b,100);
    text('G',x, y , squareSize);
     textSize(squareSize);

 let x1 = random(width);
  let y1 = random(height);
  let x2 = round(x1 + random(-50, 50));
  let y2 = round(y1 + random(-50, 50));

  set(x2, y2, get(x1, y1, 200, 200)); // x,y,obj
  updatePixels();

}
	

