let angles = [0,90,180,270];

let start = 0;

let rad = 600/12;

function setup() {
  createCanvas(600, 600);
  background(0);
  angleMode(DEGREES);
  noStroke();
}

function draw() {
  
  for(let i = 0; i<=600; i+=rad){
    for(let j = 0; j<=600; j+=rad){
      drawColor();
      start = angles[int(random(3))];
      arc(i,j,rad*2,rad*2,start,start+(int(random(90))));
      circle(i,j,20);
    }
  }
  
  noLoop();
}

function drawColor() {
  let dcol = [
    "rgb(0,170,170)",
    "rgb(200, 150, 0)",
    "rgb(120, 160, 50)",
    "rgb(180, 255, 180)",
  ];
  fill(random(dcol));
}