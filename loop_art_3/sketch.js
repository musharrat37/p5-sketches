//inspired by gyroscope - upon mouse movement along x will //show a few more circles
var arr  = [40, 80, 20, 160];

var flag = 0;

var rot = 0;
var scl = 0;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  //background(0);
  frameRate(30);  
}

function draw() {
  background(0);
  
  for(var i = 0; i <= 3; i++){
    for(var j = 0; j <= 3; j++){
      push();
      translate(0, 0);
      rotate(rot*0.1);
      //scale(scl);
      noStroke();
      fill(200,random(255));
      circle(arr[i],arr[j]*random(50),mouseX*0.05);
      pop();
    }
  }

  //noStroke();
  fill(0,255,255);
  //translate(width/3,height/4);
  
  rotateX(frameCount * 0.1);
  torus(50, 5);
  
  fill(0,0,255);
  sphere(20);
  
  fill(0,100,255);
  rotateY(frameCount * 0.1);
  torus(90, 5);
  
  fill(200,100,255);
  rotateX(frameCount * 0.5);
  torus(150, 3);
  
  rot += 1;
  scl += 0.01;
}

