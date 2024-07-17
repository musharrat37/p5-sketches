let col = [0,100,200,150,70];
let rot = 0;

function setup() {
  createCanvas(600, 600);
  background(255);
  noStroke();
}

function draw() {
  
  for(let y = 0; y<12; y++){
    for(let x = 0; x<12; x++){
      
      shape = int(random(3));
      fill(random(col));
      
      push();
      translate(x*50+25,y*50+25);
      rotate(int(random(4))*HALF_PI);
      
      if(shape == 1){
        //rotate(rot*0.01);
        star(0,0,25,10,7);
      }else if(shape == 2){
        rect(-25,-25,10,5);
        rect(-25,-15,20,5);
        rect(-25,-5,30,5);
        rect(-25,5,40,5);
        rect(-25,15,50,5);
      }else{
        ellipse(0,-0,20,10);
      } 
      pop();
    }
  }
  noLoop();

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

