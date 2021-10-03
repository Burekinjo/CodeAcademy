let  shapeWidth = 100;

function setup() {  
  createCanvas(400, 400);
}

function draw() {
  background(200);

// TODO: Set the top-left circle fill to rgb blue
  fill(0,0,255);
  circle(width/2 - shapeWidth, 
         shapeWidth, 
         shapeWidth);

// TODO: Set the top-right rectangle fill to black with alpha level of 40  
fill(0,40);
  square(width/2 + shapeWidth/2, 
         shapeWidth/2, 
         shapeWidth);
  
// TODO: Set the bottom-left triangle to 'purple'
fill('purple');
  triangle(shapeWidth/2, 
           height/2 + shapeWidth/2, 
           shapeWidth/2, height - shapeWidth/2, 
           width/2 - shapeWidth/2, 
           height/2 + shapeWidth/2);

// TODO: Set the bottom-right circle to transparent
noFill();
  circle(width/2 + shapeWidth, 
         height/2 + shapeWidth, 
         shapeWidth);
}