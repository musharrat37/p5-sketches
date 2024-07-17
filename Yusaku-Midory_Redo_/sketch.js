function setup() {
  createCanvas(600, 600);
  background(247, 240, 221);
  noStroke();
}

function draw() {
  for (let i = 0; i < 12; i = i + 1) {
    for (let j = 0; j < 12; j = j + 1) {
      push();
      translate(i * 50 + 25, j * 50 + 25);
      drawColor();
      rotateShape();
      drawShape();
      pop();
    }
  }
  noLoop();
}

function drawColor() {
  let dcol = [
    "rgb(0,90,170)",
    "rgb(0, 150, 180)",
    "rgb(20, 60, 50)",
    "rgb(180, 180, 180)",
  ];
  fill(random(dcol));
}

function rotateShape() {
  rotate(int(random(4)) * HALF_PI);
}

function drawShape() {
  let dc = int(random(3));
  if (dc == 0) {
    arc(-25, -25, 100, 100, 0, HALF_PI);
  }
  if (dc == 1) {
    rect(-25, -25, 50, 8);
    rect(-25, -8, 50, 8);
    rect(-25, 8, 50, 8);
  }
  if (dc == 2){ 
    scale(0.5);
    for(let i = 0; i<=1; i++){
      for(let j = 0; j<=1; j++){
        push();
        translate(i * 50 - 25, j * 50 - 25);
        drawColor();
        rotateShape();
        arc(-25, -25, 100, 100, 0, HALF_PI); 
        pop();
      }
    }
  }
}
