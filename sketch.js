function setup() {
  createCanvas(600,750);
  background('#2F2F2F');
}

function draw() {
  
  //white rectangle as background
  noStroke();
  fill(255);
  rect(10,10,580,730);
  
  //two yellow rectangles
  fill('#FAE317');
  noStroke();
  rect(400,10,190,220);
  rect(10,450,90,225);
     
  strokeWeight(10);
  stroke('#2F2F2F');
  //vertical lines from right
  line(500,225,500,375);
  line(400,0,400,750);
  
  line(150,0,150,75);
  line(100,525,100,675);

  
  //horizontal lines from top
  line(0,75,600,75);
  line(0,225,600,225);
  line(150,375,600,375);
  line(0,450,600,450);
  line(0,675,250,675);
  
  //red rectangles
  fill('#F50F0F');
  rect(100,75,300,300);
  rect(400,600,195,145);
  
  //blue rectangle
  fill('#0D7FBE');
  rect(400,450,195,150);
  
  //black rectangles
  fill(0);
  rect(100,375,150,150);
  rect(250,525,150,75);

  //bottom yellow rectangle with border
  fill('#FAE317');
  rect(250,600,75,145);
  
}