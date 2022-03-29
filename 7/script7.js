var exampleText= "G"
	
function setup(){
	createCanvas (1000,1000);

    

noFill();


}


function draw(){


stroke (0);
strokeWeight(0.4);


textSize(500)

text(exampleText,mouseX,mouseY)
}


function mousePressed(){
	saveCanvas("s1","png")
}