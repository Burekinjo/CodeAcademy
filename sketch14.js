let circleX;
let circleY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noStroke();
  frameRate(10);
}

function draw(){
  // TODO: Set the elliipse's x position to be a random position
  circleX= random(width);


  // TODO: Set the elliipse's y position to be a random position
   circleY= random(height);


  // TODO: Set the fill to be a random value between white and black
  fill(random(256));

  // TODO: Create an ellipse with defined variables passed in
  ellipse(circleX, circleY, 50,50);

}