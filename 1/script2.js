let x,y,r,g,b;
let randomC,randomD;

function setup(){
	createCanvas (1000,1000);
	background(0);
}
function draw(){
	r=random(0,255);
    g=random(0);
    b=random(0,255);
    x=random(0,1000);
    y=random(0,1000);

    stroke(r,g,b);

    randomC=random(1,100);
    

    randomD=random(0,5);
    ellipse(mouseX,mouseY,randomD,randomC)

    
    fill(r,g,b,50);
    ellipse(x,y,randomC,randomD);




    
}




	

function mousePressed(){
	saveCanvas("s1","png")
}