function setup() {
    createCanvas(windowWidth, windowHeight);
  }
  
  function draw() {
    background(0);
  
    fill(255,0,0);
    // TODO: Translate the rectangle to be 60px right and down
    translate(60,60);
    rect(0, 0, 360, 360); 
      
    fill(0,0,255);
    // TODO: Translate the rectangle to be 60px right and down
    translate(60,60);
    rect(0, 0, 180, 180); 
  }