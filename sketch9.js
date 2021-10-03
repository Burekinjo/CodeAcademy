function setup() {
    createCanvas(400, 400);
    // TODO: Remove stroke
    noStroke();
  }
  
  function draw() {
    background(220);
    
    //TODO: Draw Cheese before Holes
    // Cheese
    fill('#FFFF66');
    rect(50, 50, 300, 300);
    // Holes
    fill(220);
    noStroke();
    circle(100,100, 50);
    noStroke();
    circle(225,140, 60);
    noStroke();
    circle(150,275, 50);  
    noStroke();
    circle(300,250, 20);
    // Endholes
    
    
    // End cheese
  
  }