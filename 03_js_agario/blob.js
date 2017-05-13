// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/JXuxYMGe4KI

function Blob(x, y, r) {
  this.pos = createVector(x, y);  // position (x,y)
  this.r = r;                     // radius
  this.vel = createVector(0,0);   // velocity

  this.update = function() {
    var newvel = createVector(mouseX-width/2, mouseY-height/2); // capture mouse position
    newvel.setMag(3);
    this.vel.lerp(newvel, 0.2);   // smooth lerp (linear interpolation) towards to the mouse
    this.pos.add(this.vel);       // add velocity to the blob
  }

  this.eats = function(other) {   // define the behaviour when the big blob eats a small blob
    var d = p5.Vector.dist(this.pos, other.pos); // measure the distance between two blobs to detect collision
    if (d < this.r + other.r) {                  // detecting a blob is eating another
      var sum = PI * this.r * this.r + PI * other.r * other.r; // the area after eating a blob
      this.r = sqrt(sum / PI);    // recalculate the big blob's radius after eating a small blob
      //this.r += other.r;
      return true;
    } else {
      return false;
    }
  }

  this.show = function() { // appearance of a blob
    fill(255);             // color of a blob 
    ellipse(this.pos.x, this.pos.y, this.r*2, this.r*2); // position and shape
  }
}
