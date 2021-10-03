let yPos = 0;
let ySpeed = 5;

function setup() { 
  createCanvas(windowWidth, windowHeight);
  // TODO: Set the frame rate to be 60 FPS
  frameRate(60);
  
  // TODO: Set the frame rate to be 24 FPS
  frameRate(24);

  // TODO: Set the fram erate to be 6 FPS
  frameRate(6);
  
  
} 

function draw() { 
  background(0);
  fill(255);
  // Draws the ellipse
  ellipse(width/2, yPos, 100,100);
  
  // Moves the ellipse down the canvas
  yPos = yPos + ySpeed; 
}