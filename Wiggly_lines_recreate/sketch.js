function setup() {
  createCanvas(windowWidth-10, windowHeight);
  background(245);
}

function draw() {
  let y = height/87;
  var memory = [-10,y];
  let m = 0;
  let h = 0;
  
  for(var j=1; j<=100;j++){
    
    let length = random(100);
    
    for(var i = 0; i<length; i++){
      h = map(random(y),0,1,(y*j)-0.2,(y*j)+0.2);
      let endx = memory[0]+random(15);
      let endy = h;
      line(memory[0],memory[1],endx,endy);
      memory[0] = endx;
      memory[1] = endy;
    }
    memory = [-10,y*j];
  }
  
  noLoop();

}