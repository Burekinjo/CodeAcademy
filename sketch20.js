function setup() {
    createCanvas(windowWidth, windowHeight);
  }
  
  function draw() {
    background(0);
    fill(255, 0, 0);
  
    // TODO: Scale the rectangle down by 0.5
    scale(0.5);
    
    rect(0, 0, 120, 120); // First rectangle
  
    fill(0, 0, 255);
  
    // TODO: Scale the rectangle up by 4
  scale(4);
  
    // TODO: Set the rectangle's origin point to be its center
  rectMode(CENTER);
    rect(100, 100, 120, 120); // Second rectangle
  }