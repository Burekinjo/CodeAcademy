function setup() {
    createCanvas(windowWidth, windowHeight);
  }
  
  function draw() {
    background(0);
    fill(0);
  
    // TODO: Rotate the ellipse pattern by a quarter pi
  rotate(QUARTER_PI);
  
  
    // TODO: Specify the angle mode to be degrees
  angleMode(DEGREES);
  
    // TODO: Rotate by 30 degrees
    
  rotate(radians(30));
    for (let i = 0; i < width *2 ; i += 75) {
      for (let j = 0; j < height *2 ; j += 75) {
        fill(255, 0, 0, 180);
        ellipse(i, j, 50, 50);
      }
    }
  
    // TODO: Rotate by frameCount * 10
    rotate(radians(frameCount * 10));
    
    for (let i = 0; i < width *2 ; i += 75) {
      for (let j = 0; j < height * 2; j += 75) {
        fill(0, 0, 255, 180);
        rect(i, j, 50, 50);
      }
    }
  }