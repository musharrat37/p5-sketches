let word1 = ["t","r","a","i","n","|"];
let word2 = ["s","m","o","k","e","~"];
let word3 = ["r","a","i","l","w","a","y","/"];

let x1 = -100;
let x2 = 600;

let vs1 = 130;
let vs2 = 330;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER,CENTER);

}

function draw() {
  background(250);
  
  for(let s = 0; s < 6; s+=1){
    if(vs1 < 70){
      vs1 = 130;
    }
    if(vs2 < 270){
      vs2 = 330;
    }
    push();
    translate(x1,vs1);
    textSize(25);
    fill(200);
    text(word2[s],s*20,random(0,10));
    text(word2[s],(s*20)-120,random(-10,-30));
    text(word2[s],(s*20)-250,random(-20,-40));
    text(word2[s],(s*20)-380,random(-30,-50));
    pop();
    vs1-=0.3;
    
    push();
    translate(x2,vs2);
    textSize(25);
    fill(200);
    text(word2[s],s*20,random(0,10));
    text(word2[s],(s*20)+120,random(-10,-30));
    text(word2[s],(s*20)+250,random(-20,-40));
    text(word2[s],(s*20)+380,random(-30,-50));
    pop();
    vs2-=0.3;
  }
  
  push();
  strokeWeight(4);
  line(0,180,500,180);
  line(0,200,500,200);
  line(0,380,500,380);
  line(0,400,500,400);
  pop();

  for(let num = 1; num < 100; num+=8){
      for(let a = 0; a < 8; a++){
        push();
        textSize(15);
        text(word3[a],(a+num)*10,190);
        text(word3[a],(a+num)*10,390);
        pop();
      }
  }
  
  
  for(let i = 0; i<6; i++){
    if(x1 > 1200){
      x1 = -150;
    }
    if(x2 < -800){
      x2 = 600;
    }
    
    push();
    translate(x1,150);
    textSize(50);
    fill(200,0,0);
    text(word1[i],i*30,0);
    text(word1[i],(i*30)-180,0);
    text(word1[i],(i*30)-360,0);
    text(word1[i],(i*30)-540,0);
    pop();
    x1 += 0.5;
    
    push();
    translate(x2,350);
    textSize(50);
    fill(200,0,0);
    text(word1[i],i*30,0);
    text(word1[i],(i*30)+180,0);
    text(word1[i],(i*30)+360,0);
    text(word1[i],(i*30)+540,0);
    pop();
    x2 -= 0.3;
  }
  
}