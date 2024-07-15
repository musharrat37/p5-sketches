//attempted to replicate how sound waves could move an object based on size and strength of the waves

function setup() {
  createCanvas(windowWidth-10, windowHeight-10);
  frameRate(20);
}

let t = 0;
let s = 0;
let dropUnit = 0;

function draw() {
  background(0);
  noFill();
  stroke(random(50,200));
  
  //testing with map yielded the same result
  //w1 = map(noise(t), 0,1, 0,100, true);
  
  //top left circles
  circle(width/5, height/4, noise(t)*100);
  circle(width/5, height/4, 20);
  
  //middle right circles
  circle(width - width/5, height/2, noise(t+50)*200);
  circle(width - width/5, height/2, 40);
  
  //bottom left circles
  circle(width/5 , height - height/4, noise(t+20)*150); 
  circle(width/5 , height - height/4, 30);

  
  //dropping circle specifics
  noStroke();
  fill(255); 
  
  //bouncing off effect
  j1 = map(noise(s),0,1,width/2, 3*width/4);
  j2 = map(noise(s),0,1,0, width/2);
  j3 = map(noise(s),0,1,width/2, 3*width/4);
  
  
  if(dropUnit < height/9){
     circle(width/3, dropUnit, 25); 
  }
  else if((dropUnit>height/9)&&(dropUnit<height/3))
  {
     circle(j1, dropUnit, 25); 
  }
  else if((dropUnit>height/3)&&(dropUnit<2*height/3)){
     circle(j2, dropUnit, 25); 
  }
  else if (dropUnit>2*height/3){
     circle(j3, dropUnit, 25); 
  }
  
  
  t = t + 0.2;
  s = s + 0.1;
  dropUnit += 5;
     
  //loop dropping circle
  if(dropUnit >= height){
    dropUnit = 0;
  }
}

function windowResized(){
  resizeCanvas(windowWidth-10,windowHeight-10);
}