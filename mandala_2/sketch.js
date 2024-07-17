function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  frameRate(20);
  
}

let rot = 0;
let scl = 1;

let r = 0;
let g = 0;

function draw() {
  
  fill(r,random(255),noise(255),50);
  stroke(r, 0, 255);
  
  translate(width/2,height/2);
  rotate(rot*0.25);
  scale(scl*0.1);
  
  
  push();
  translate(rot,10);
  ellipse(0,0,40,100);
  pop();
  
  push();

  pop();
  
  
  rot += 1;
  scl += 0.01;
  r += 0.5;
  
  if(frameCount > 3000){
    noLoop();
  }
}