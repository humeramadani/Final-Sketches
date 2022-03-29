function setup() {
  createCanvas(1000, 1000, WEBGL);
}

function draw() {
  background(0);
  fill(255)



  translate(-240, -100, 0);
  normalMaterial();

  translate(240, 0, 0);
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  fill(180);
  box(20, 300, 10);
  pop();

   translate(90, 160, 10);
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  fill(50);
  box(200, 20, 10);
  pop();

     translate(20, -300, 40);
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  fill(150);
  box(210, 20, 10);
  pop();

     translate(80, 300, 80);
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  fill(200);
  box(20, 170, 10);
  pop();

       translate(60, -300, -260);
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  fill(80);
  box(25, 100, 20);
  pop();

    translate(60, 200, -260);
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  fill(250);
  box(180, 25, 20);


  pop();

  


}


