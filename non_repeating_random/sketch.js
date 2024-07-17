let memory_x = [];
let memory_y = [];

let x1 = [];
let y1 = [];

let x2 = [];
let y2 = [];

let length;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i = 0; i<20; i++){
    x1[i] = int(random(-100,width));
    x2[i] = x1[i] + int(random(60));
  }
  for(let j = 0; j<20; j++){
    y1[j] = int(random(-100,height));
    y2[j] = y1[j] + int((random(70)));
  }
  frameRate(10);
  noStroke();
  length = int(random(80));
}

function draw() {
  background(0);
  
  //translate(0,0);
  //scale(int(random(20,30)));
  
  for(let i = 0; i<20; i++){
      fill(random(255),random(255),random(255));
      let x3 = x2[i]+int(random(70));
      let y3 = y2[i]+int(random(50));
      triangle(x1[i],y1[i],x2[i],y2[i],x3,y3);
      memory_x = [x2[i],x3];
      memory_y = [y2[i],y3];
    for(let n = 0; n<length; n++){
      fill(random(255),random(255),random(255));
      x3 = memory_x[1]+int(random(70));
      y3 = memory_y[1]+int(random(-20,70));
      triangle(memory_x[0],memory_y[0],
              memory_x[1],memory_y[1],
              x3,y3);
      memory_x = [memory_x[1],x3];
      memory_y = [memory_y[1],y3];
    }
  }
 
  //noLoop();
  
}