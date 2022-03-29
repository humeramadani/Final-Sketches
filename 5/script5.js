let diameter;
let angle = 0;

function setup() {
  createCanvas(1000, 1000);
  diameter = height - 10;
  noStroke();
  fill(255, 204, 0);
}

function draw() {
  background(0);

  let d1 = 10 + (sin(angle) * diameter) / 2 + diameter / 2;
  let d2 = 10 + (sin(angle + PI / 2) * diameter) / 2 + diameter / 2;
  let d3 = 10 + (sin(angle + PI) * diameter) / 2 + diameter / 2;


let d4 = 5 + (sin(angle) * diameter) / 2 + diameter / 3;
  let d5 = 15 + (sin(angle + PI / 5) * diameter) / 3 + diameter / 2;
  let d6 = 20 + (sin(angle + PI) * diameter) / 6 + diameter / 2;


 // ellipse(0, height / 2, d1, d1);
  text("G",height/2, d1,100);
  textSize(400);

   text("G",height/2, d2,100);
  textSize(200);


 text("G",height/2, d3,100);
  textSize(100);

  text("G",height/2, d1,100);
  textSize(50);

   text("G",height/2, d2,100);
  textSize(100);


 text("G",width / 2, d3,100);
  textSize(300);



 text("G",height/2, d4,100);
  textSize(180);

   text("G",height/2, d5,100);
  textSize(120);


 text("G",height/2, d6,100);
  textSize(300);

  text("G",height/2, d1,100);
  textSize(50);

   text("G",height/2, d2,100);
  textSize(100);


 text("G",width / 2, d3,100);
  textSize(300);

   text("G",height/2, d1,100);
  textSize(400);

   text("G",height/2, d2,100);
  textSize(200);


 text("G",height/2, d3,100);
  textSize(100);

  text("G",height/2, d1,100);
  textSize(50);

   text("G",height/2, d2,100);
  textSize(100);


 text("G",width / 2, d3,100);
  textSize(300);



 text("G",height/2, d4,100);
  textSize(180);

   text("G",height/2, d5,100);
  textSize(120);


 text("G",height/2, d6,100, 400);
  textSize(300);

  text("G",height/2, d1,100,200);
  textSize(50);

   text("G",height/2, d2,100, 50);
  textSize(100);


 text("G",width / 2, d3,100,40);
  textSize(300);
//  ellipse(width / 2, height / 2, d2, d2);
//  ellipse(width, height / 2, d3, d3);
 

  angle += 0.02;
}
  