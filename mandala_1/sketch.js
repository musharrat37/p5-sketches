function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  frameRate(20);
  
}

let rot = 0;
let scl = 1;

let r = 0;

function draw() {
  
  noFill();
  stroke(r, 0, 255);
  
  translate(width/2,height/2);
  rotate(rot*0.25);
  scale(scl*0.1);
  
  
  push();
  rotate(rot*0.1);
  ellipse(0,0,30,400);
  triangle(300,100,200,200,400,200);
  pop();
  
  push();
  stroke(0,150,r*0.1,random(100));
  translate(20,20);
  rotate(rot*0.1);
  scale(scl*0.1);
  line(-30,-30,30,30);
  pop();
  
  
  rot += 1;
  scl += 0.01;
  r += 0.5;
  
  if(frameCount > 3000){
    noLoop();
  }
}