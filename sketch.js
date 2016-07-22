//hacer monito que se le pueda agarrar la cabeza con el mouse
//que al ponerla en cierto lugar pase algo (no puedo)
//que el vestido se agrande y achique con pos x de mouse


var largoBrazo = 180;
var anchoBrazo = 10;
var a = 0
var b = 0 //color monito
var xBrazo = 340
var yBrazo = 160
var xcara = 400
var ycara = 100
var esquinaVestido1 = 300
var esquinaVestido2 = 500



//monito
function monito() {


  fill(255, b, 0, 100);
  stroke(0);
  strokeWeight(5);
  arc(460, 160, largoBrazo, anchoBrazo, 185, 175, CHORD)
  ellipse(xcara, ycara, 100, 100);

  //alargar vestido
  var anchoVestido = map(mouseX, 0, width, -50, 200);
  triangle(400, 150, esquinaVestido2 + anchoVestido, 300, esquinaVestido1 - anchoVestido, 300);

  //pies
  rect(355, 300, 15, 80, 0, 0, 10, 10)
  rect(430, 300, 15, 80, 0, 0, 10, 10)

  //para mover la cabeza
  var cara = dist(xcara, ycara, mouseX, mouseY)

  if (cara < 50 && mouseIsPressed) {
    xcara = mouseX;
    ycara = mouseY;
  
    

  } else {
    xcara = 400
    ycara = 100;
  }


}




function setup() {

  angleMode(DEGREES)

  createCanvas(600, 600);


}

function draw() {
  background(200)


  beginShape();

  //casita
  strokeWeight(5)
  noFill();
  vertex(50, 350);
  vertex(50, 250)
  vertex(115, 180)
  vertex(180, 250)
  vertex(180, 350);
  endShape();




  cielo();
  suelo();


  monito();



  //que el brazo salude ..... no logro hacer que baje luego de los 60 grados
  translate(380, 160);
  a += 0.5
  rotate(a);
  arc(-40, 0, largoBrazo, anchoBrazo, 5, 355, CHORD)

  if (a == 60) {
    //  b = b + 50
    a = a = 0

  }

  //if (b > 250) {
  //  b = 0
  //}

}


// suelo
function suelo() {
  var f = 0
  for (var i = 350; i < height; i += 1) {

    strokeWeight(2);
    stroke(0, f, 0, 120)
    line(0, i, width, i);
    f = f + 0.5
  }
}
//cielo
function cielo() {
  var c = 0
  for (var e = 350; 0 < e; e--) {

    strokeWeight(1);
    stroke(0, 0, c, 120);
    line(0, e, width, e)
    c += 0.1
  }
}