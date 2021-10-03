function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(12);
  }
  
  function draw() {
    background(0, 25);
    rectMode(CENTER);
  
    // Red Rectangle: Translate then rotate
    push();
  
    // TODO: Translate to the center of canvas
  translate(width/2, height/2);
  
    // TODO: Rotate by frameCount
  rotate(radians(frameCount));
    
    noFill();
    stroke(255, 0, 0);
    rect(0, 0,windowWidth, windowHeight);
    pop();
  
    // Blue Rectangle: Rotate then translate
    push();
    
    // TODO: Rotate by frameCount
  rotate(radians(frameCount));
  
    // TODO: Translate to the center of canvas
  
  translate(width/2, height/2);
    noFill();
    stroke(0, 0, 255);
    rect(0, 0, windowWidth, windowHeight);
    pop();
  
  }