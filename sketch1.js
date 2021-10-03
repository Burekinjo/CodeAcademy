function setup(){
    // Your setup code goes here
    createCanvas(400, 400);
    background(200);
  }
  
  function draw(){
    // Your drawing code goes here 
    // TODO: Draw a point at the center of the canvas
    point(200,200);
  
    // TODO: Draw a point 100px to the left of the center
    point(100,200);
  
    // TODO: Draw a line between (20, 40) and (320, 120)
    line(20,40,320,120);
  
    // TODO: Draw a vertical line
    line(200,0,200,400);
  
    // TODO: Draw a diagonal line
    line(0,400,400,0);
    
  }