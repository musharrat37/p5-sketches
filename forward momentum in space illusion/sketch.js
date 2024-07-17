//wordlist reference: https://www.mit.edu/~ecprice/wordlist.10000
//wormhole reference from starfield challenge (coding train):https://www.youtube.com/watch?v=17WoOqgXsRM

var points = [];

var rate = 0;

let h = 10;

let table1, words = [];

function setup() {
  createCanvas(600, 600);

  for (var i = 0; i < 1000; i++) {
    points[i] = new Points();
  }
  
  textAlign(CENTER, CENTER);
  
  for (let r = 0; r < 1000; r++){
    let tableRow = table1.rows[r];
    words[r] = tableRow.get("word");
  }
}

function preload() {
  table1 = loadTable("wordlist.csv", "csv", "header");
}

function draw() {
  if(rate > 300){
    rate = 100;
  }else{
    rate ++;
  }
  
  
  background(0);
  
  for(var i = 1; i < 40; i++){
    noFill();
    stroke(255*(i/80));
    strokeWeight(2);
    push();
    circle(width/2, height/2, noise(h)*width/8*i);
    pop();
  }
  
  translate(width/2, height/2); 
  
  for (var j = 0; j < points.length; j++) {
    points[j].update();
    points[j].show(j);
  } 
  
  h += 0.005;
  if (h > 20){
    h = 1;
  }
}