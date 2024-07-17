//references: https://p5js.org/reference/#/p5/shininess

function setup() {
  createCanvas(600, 600, WEBGL);
  background('#2E3979');
  

  //frameRate(20);
}

let rot = 1;

function draw() {
  
  
  
  for(let y = 0; y<12; y++){
    for(let x = 0; x<12; x++){
      push();
      translate(x*50+25,y*50+25);
      //rotate(rot*0.01);
      fill('#2E3979');
      noStroke();
      star(-300,-300,25,10,7);
      pop();
    }
  }
  
  push();
  //translate(width/2,height/2);
  rotate(rot*0.01);
  stroke(255, random(200));
  line(0,0,600,600);
  pop();

  push();
  rotateY(rot * 0.01)
  fill(250,250,0);
  ambientLight(60, 60, 60);
  pointLight(255, 255, 255, 300, 300, 50);
  //specularMaterial(250);
  //shininess(20);
  stroke(230);
  sphere(60);
  pop();
  
  
   
  rot ++;
}

//reference of star: https://p5js.org/examples/form-star.html

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}