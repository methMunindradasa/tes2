function setup() {
  createCanvas(600,400);
}

function draw() {
  background(255);
  if(isMousePressed)
  {
  line(mouseX,mouseY,500,200);
  }
  
}