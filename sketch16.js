function setup() {
    createCanvas(windowWidth, windowHeight);
  }
  
  function draw() {
    background(0);
  
    for (let i = 0; i < width; i += 75) {
      for (let j = 0; j < height; j += 75) {
        // Create red ellipse pattern
        fill(255, 0, 0, 180);
        // TODO: Specify a corner origin for the ellipse
        ellipseMode(CORNER);
        ellipse(i, j, 50, 50);
  
        // Create blue square pattern
        fill(0, 0, 255, 180);
        // TODO: Specify a center origin for the rectangle
        rectMode(CENTER);
        rect(i, j, 50, 50);
      }
    }
  }