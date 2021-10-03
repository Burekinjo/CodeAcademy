function setup(){
    createCanvas(400, 400);
    background(200);
  }
  
  function draw(){
    // Your drawing code goes here
    // TODO: Draw a triangle
    triangle(50,100,200,300,150,200);
  
    // TODO: Draw a triangle that shares one vertex with the one above
    triangle(50,200,200,300,155,300);
  
    // TODO: Draw a quadrilateral
    quad(50,50,100,150,200,250,400,350);
  
    // TODO: Draw a quadrilateral that shares one vertex with the one above
    quad(55,55,100,150,250,250,410,355);
  }