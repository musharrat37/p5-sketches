function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  rectMode(CENTER);
  noStroke();
  frameRate(10);
}

var trans = 0;
var rot = 0;
var scl = 1;

var flag = 0;

function draw() {
  
  translate(width/2,height/2);
  rotate(rot);
  scale(scl*0.01);
  
    
  for(var i=0; i < width; i += 30){
    for (var j=0; j < height; j += 20){
      if(flag == 0){
        fill(255);
        flag = 1;
      }else if(flag == 1){
        fill(0);
        flag = 0;
      }
      rect(0,0,width-i,height-j); 
    }
  } 
  
  scl += 1;
  rot += 0.1;
  //noLoop();
}
