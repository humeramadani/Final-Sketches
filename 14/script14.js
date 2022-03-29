let img;

function preload() {
	img = loadImage('assets/G4.jpeg');
}

function setup() {
	createCanvas(2000,2000);
	noStroke();
}


function draw() {
	background(255)

	push()
	translate(500,500)

	push()
	translate(-200,-500)
	for (xPos = 0;xPos < width; xPos=xPos+30) {
		for(yPos=0;yPos < height;yPos=yPos+15) {
			newFill = img.get(xPos,yPos);

			
			fill(newFill)

			var circleSize = map(sin(frameCount/10),-1,1,5,10);

			circleSize = 300;

			if (newFill != [0,0,0,0]) {


				circle(xPos+map(noise(frameCount/100+40+yPos),0,40,-40,10),yPos+map(noise(frameCount/100+40+xPos),0,40,-40,10),circleSize);	
			}
			
		}
		

	}
	pop()
	pop()

	
}