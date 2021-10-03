function setup() {
    createCanvas(windowWidth, windowHeight);
  }
  
  function draw() {
    background(0, 15);
    stroke(0, 0, 255);
    fill(255, 0, 0, 50);
    
    // TODO: Specify the rectangle's origin point to be center
    rectMode(CENTER);
  
  
    // TODO: Translate rectangle to the center of canvas
  translate(width/2, height/2);
  
    // TODO: Rotate rectangle by a quarter pi
    rotate(QUARTER_PI);
  
    rect(0, 0, 450, 450); // First rectangle
  
    stroke(0, 0, 255);
    fill(255, 0);
  
    // TODO: Rotate rectangle by frameCount / 2 in radians
    rotate(radians(frameCount/2));
  
    rect(0, 0, 450, 450); // Second rectangle
  }