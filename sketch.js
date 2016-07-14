var largoBrazo = 180;
var anchoBrazo = 10;
var a = 0
var b = 0
var xBrazo = 340
var yBrazo = 160

//dibujo el monito
function monito() {

  fill(0, 200, 0)
  strokeWeight(3);
  rect(0, 350, width, 250)
  fill(0, 40, 200, 50)
  rect(0, 0, width, 350)
  fill(255, b, 0, 100);
  stroke(0);
  strokeWeight(5);
  arc(460, 160, largoBrazo, anchoBrazo, 185, 175, CHORD)
  ellipse(400, 100, 100, 100);
  triangle(400, 150, 500, 300, 300, 300)
  rect(355, 300, 15, 80, 0, 0, 10, 10)
  rect(mouseX, mouseY, 15, 80, 0, 0, 10, 10)



}




function setup() {
  frameRate(40)
  angleMode(DEGREES)

  createCanvas(600, 600);


}

function draw() {

  background(255)
  monito();

  translate(380, 160);

  rotate(a);
  arc(-40, 0, largoBrazo, anchoBrazo, 5, 355, CHORD)
  a = a + 1;
  if (a > 60) {
    b = b + 50
    a = 0
  }
  if (b > 250) {
    b = 0
  }

}

//function angulo() {
//frameRate (20)
//for (var i = 0; i < 30; i++)
//rotate(a);
//arc(0, 0, largoBrazo, anchoBrazo, 5, 355, CHORD)
//a = a + 1;
//if (a > 50) {
//  anguloB()
//}

function anguloB() {

  for (var i = 0; i < 50; i++) {

    background(255)
    monito();
    translate(340, 160);

    rotate(a);
    arc(0, 0, largoBrazo, anchoBrazo, 5, 355, CHORD)
    a = a - 1;
  }
}


//if (a = 50) {
for (var i = 0; i < 50; i++) {

  background(255)
  rotate(-a + 1)
  translate(0, 0)
  monito();
  translate(340, 160);

  rotate(a);
  arc(0, 0, largoBrazo, anchoBrazo, 5, 355, CHORD)
  a = a - 1;
  //}
}