function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noStroke();
  //frameRate(20);
}

var x = [10,30,50,70];
var y = [10,50,30,10];

let t = 0;
let rot = 0;
let scl = 0;


function draw() {
  
      translate(width/2, height/2);
       rotate(rot*0.01);
       
       push();
       rotate(rot*0.01);
       translate(10, 10);
       pop();
  
  push();
       translate(t*0.2,t*0.2);
       rotate(rot*0.05);
       scale(scl*0.001);
       
   for(var i=0; i<=3; i++)
     {
       fill(random(255),random(255),200-rot*0.01,random(10,200))
       circle(x[i],y[i],10);
     }
  pop();
  
  t +=0.5;
  rot += 1;
  scl += 1;

}