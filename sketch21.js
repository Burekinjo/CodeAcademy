function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
  }
  
  function draw() {
    background(0);
    rectMode(CENTER);
  
    // TODO: Specify angle mode to be in degrees
    angleMode(DEGREES);
  
  
  
    // RED: First Pattern
    // TODO: Horiontally shear the pattern by 15 degrees
    shearX(15);
  
    for (let i = 0; i < width; i += 75) {
      for (let j = 0; j < height; j += 75) {
        fill(255, 0, 0, 180);
        rect(i, j, 50, 50);
      }
    }
  
    // BLUE: Second Pattern
    // TODO: Horiontally shear the pattern by -15 degrees
  shearX(-15);
    for (let i = 0; i < width; i += 75) {
      for (let j = 0; j < height; j += 75) {
        fill(0, 0, 255, 180);
        rect(i, j, 50, 50);
      }
    }
  
    // PURPLE: Third Pattern
    // TODO: Vertically shear the pattern by frameCount/25
  shearY(frameCount/25);
    for (let i = 0; i < width * 2; i += 75) {
      for (let j = 0; j < height * 2; j += 75) {
        fill(200, 0, 255, 180);
        rect(i, j, 50, 50);
      }
    }
  }