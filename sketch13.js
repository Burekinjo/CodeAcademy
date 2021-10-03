let xPos = 0;
let color = 1;
let size = 1;

function setup() { 
  createCanvas(windowWidth, windowHeight);
  xPos = width;
} 

function draw() { 
  background(0);
  fill(color);

  // TODO: Draw an ellipse with xPos variable for the x position
  ellipse(xPos, height/2, size, size);

  // TODO: increment the color variable by 1
  color++;

  // TODO: increment the size variable by 0.5
  size+=0.5;

  // TODO: decrement the xPos variable by 2
  xPos-=2;

}