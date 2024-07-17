
function Points() {
  this.x = random(-100, 100);
  this.y = random(-100, 100);
  this.z = random(width);
  this.pz = this.z;

  this.update = function() {
    this.z = this.z - rate*0.1;
    if (this.z < 1) {
      this.z = width;
      this.x = random(-width, width);
      this.y = random(-height, height);
      this.pz = this.z;
    }
  }

  this.show = function(index) {

    var sx = map(this.x / this.z, 0, 1, 0, width);
    var sy = map(this.y / this.z, 0, 1, 0, height);

    var r = map(this.z, 0, width, 0, 10);
    
    textSize(r);
    //point(sx, sy);
    //text(words[index], sx, sy);

    var px = map(this.x / this.pz, 0, 1, 0, width);
    var py = map(this.y / this.pz, 0, 1, 0, height);

    this.pz = this.z;

    push();
    stroke(255);
    strokeWeight(r);
    line(px, py, this.x, this.y);
    pop();

  }
}