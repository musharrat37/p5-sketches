function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noFill();
  //frameRate(20);
}

let r = 0;
let g = 0;
let b = 255;

let scl = 1;
let rot = 1;

function draw() {
  fill(r,g,random(255),random(255));
  noStroke();
  //strokeWeight(2);
  
  translate(width/3,height/3);
  scale(scl*0.5);
  rotate(rot*PI);
  
  rotate(rot*0.9);
  translate(50+g,random(10,50));
  
  arc(0,0,20,20,0,PI,PIE);
  
  push();
   translate(rot*0.1,100);
   scale(scl*0.5);
   //rotate(rot*3);
   fill(r*0.3,random(255),b,random(90));
   noStroke();
   //noFill();
   //strokeWeight(1);
   ellipse(0,0,90,50);
  pop();
  
  r += 0.5;
  g += 0.1;
  
  scl += 0.001;
  rot += 1;

}