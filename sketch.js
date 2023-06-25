let cl;
let circleX;
let circleY;

function setup() {
  createCanvas(400, 400);
  background("white");
  
  
  cl = color(random(0, 255), random(0, 255), random(0, 255), random(0, 100));
  
  
  circleX = [0, 0, 0];
  circleY = [random(20, 380), random(20, 380), random(20, 380)];
}


function draw() {
  fill(cl);
  
  
  console.log(circleX.length);
  for(let counter in circleX) {
    console.log(counter);
    
    
    circle(circleX[counter], circleY[counter], 50);
    
    circleX[counter] += random(0, 3);
  circleY[counter] += random(-3, 3);
    
    if(circleX[counter] >= width) {
      circleX[counter] = 0;
      circleY[counter] = random(height);
    }
  }
  
  
  if (mouseIsPressed) { 
    cl = color(random(0, 255), random(0, 255), random(0, 255), random(0, 100));
  }
}