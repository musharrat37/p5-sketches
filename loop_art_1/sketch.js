//mouse movement in the x axis will show change in color

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

var rot = 0;
var scl = 1;

function draw() {
  //background(0);

   
  translate(width/2,height/2);
  rotate(rot*0.1);
  if(mouseX>width/2){
    fill(255);
  }
  else if(mouseX<=width/2){ 
    fill(random(255*mouseX/100),0,random(255),random(255));
  }
  /*push();
  rotate(rot*-2);
  translate(10,10);
  scale(scl*-0.1);
  //stroke(random(200,255),random(100));
  triangle(-100,200,100,-100,150,200);
  pop();*/
  
  for(var i=0; i<400; i+=5){
    for(var j=0; j<400; j+=5){
      translate(i,j);
      noStroke();
      circle(i,j,10);
      strokeWeight(5);
      stroke(random(255));
      point(i+20,j+20);
    }
  }
    
  rot += 1;
  //scl += 0.1;
  //noLoop();  
  
}