
let t_size = [];
let ch=["c","o","n","f","u","s","e","d"];
let h_pos =[];
let v_pos =[];

let rot_factor = [0.5,-1,-0.5,1,0.8,-0.3,1,-1];
rot = 0;

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER,CENTER);
  for(let x=0;x<8;x++){
    h_pos[x] = random(10,width-10);
    v_pos[x] = random(height);
    t_size[x] = random(15,50);
  }
}

function draw() {

  background(240);
  
  for(let i=0; i<8; i++){
      if(v_pos[i] > height+10){
        v_pos[i] = -10;
      }
      push()
      dropLetter(i);
      pop();
    v_pos[i]++;
  }
  
  rot ++;
}
function dropLetter(a){
  translate(h_pos[a],v_pos[a]);
  rotate(rot*rot_factor[a]*0.1);
  textSize(t_size[a]);
  text(ch[a],0,0);
}