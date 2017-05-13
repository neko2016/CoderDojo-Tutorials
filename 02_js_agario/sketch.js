// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/JXuxYMGe4KI

var blob; // define a big blob

var blobs = []; // define a bunch of blobs
var zoom = 1;

function setup() {
  createCanvas(600, 600);            // define the dimension of a canvas
  blob = new Blob(0, 0, 64);         // define the position and radius of a blob
  for (var i = 0; i < 200; i++) {    // create 200 small blobs
    var x = random(-width,width);    // small blobs at random position
    var y = random(-height,height);
    blobs[i] = new Blob(x, y, 16);   // give the small blob a radius
  }
}

function draw() {
  background(0);                   // black background

  translate(width/2, height/2);    // translate the canvas so that the big blob is centered
  var newzoom = 64 / blob.r;       // the update should reflect the change of the big blob after eating a small blob
  zoom = lerp(zoom, newzoom, 0.1); // zoom out a bit after the big blob eats a small blob
  scale(zoom);
  translate(-blob.pos.x, -blob.pos.y); // keep the big blob at the center

  for (var i = blobs.length-1; i >=0; i--) {
    blobs[i].show();
    if (blob.eats(blobs[i])) {    // if the big blob eats a small blob
      blobs.splice(i, 1);         // remove the eaten blob
    }
  }


  blob.show();    // show the big blob
  blob.update();  // update the big blob

}
