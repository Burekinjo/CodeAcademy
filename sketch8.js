let shapeWidth = 100;

function setup() {
  createCanvas(400, 400);
  
  background(200); 
}

function draw() {
// TODO: Set the top-left line stroke to green

  stroke(0,255,0);
  strokeWeight(1);
  line(width/2 - shapeWidth, 
        shapeWidth/2,
        width/2 - shapeWidth,
        height/2 - shapeWidth/2);

// TODO: Set the top-right point weight to 100 pixels  
strokeWeight(100);
  point(width/2 + shapeWidth, 
         height/2 - shapeWidth);
  
// TODO: Set the bottom-left triangle to stroke color to red and the stroke weight of 5

stroke('red');
strokeWeight(5);
  triangle(shapeWidth/2, 
           height/2 + shapeWidth/2, 
           shapeWidth/2, height - shapeWidth/2, 
           width/2 - shapeWidth/2, 
           height/2 + shapeWidth/2);

// TODO: Set the bottom-right circle to a transparent stroke
noStroke();
  circle(width/2 + shapeWidth, 
         height/2 + shapeWidth, 
         shapeWidth);
}