//12-07-2016 taller p5 número 4
//elipse que sigue al mouse en fondo verde
// comand + T arregla formato

//tenemos variables y funciones
//para las variables tenemos; declaracion y asignacion, y fuera de las funciones
//declaracion ------- var ----- no declarar 2 veces 
var anchoElipse;
// asignación
anchoElipse = 100;

// pasan cosas y se reasigna
anchoElipse = 50;

//manera abreviada de declarar y asignar
var alturaElipse = 100;
//reasignar
alturaElipse = 50;

//scope, rango o alcance
//hay variables globales y locales
//variables globales son declaradas fuera de los cuerpos de las funciones
//las locales van declaradas dentro de los cuerpos de las funciones, entre {}
//no pueden ser llamadas o variadas desde otra funcion


//declaracion de funcion setup
function setup() {

  //frameRate (frecuencia de repeticion de draw, frames x seg) ------> por defecto es 60
  frameRate(30)
    //createCanvas (dimhori, dim vertical) en pixeles;
    //createCanvas(600, 400);
  createCanvas(windowWidth, windowHeight);
  //background(r, g, b) de 0 a 255;
  background(0, 255, 0);

  //relleno de la elipse
  //fill(r, g, b, transparencia) ----->valores de 0 a 255

  fill(0, 0, 255);

  //color borde ---- > stroke(r,g,b)
  //no borde 
  //noStroke



  //strokeWeight(px) -----> anchoborde
  strokeWeight(5);


}

//declaracion de funcion draw
function draw() {
  //ejecutar funcion fondoRojo
  //fondoRojo();
  //ellipse(posx, posy, ancho, alto);
  stroke(255, 255, 000);
  fill(255, 0, 0, 100);
  //ellipse(mouseX, mouseY, anchoElipse, alturaElipse);
  //escribe en la consola de javascript
  console.log("hola que tal?");
  console.log(alturaElipse);
  muchasElipses();
  //screenshot savecanvas (nombre, extension)
  //saveCanvas("mycanvas", "jpg")

}

//declaracion de funcion nueva , parentesis van si o si, aunque no lleven nada
//function nombreFuncion(argumento 1, arg2, etc) {
//}
//declaracion funcion rojo

function fondoRojo() {
  //declaracion y asignacion de variable local llamada rojo
  var rojo = 255;
  //usamos variable local llamada rojo
  background(rojo, 0, 0);
  //imprimir variable local en consola
  console.log("el valor de la variable rojo es " + rojo + " salud");
}

function muchasElipses() {
  var muchas = 100;

  //for(variable de loop; condicion de seguir; refrescar){}
  //i++ = i+1
  for (var i = 0; i < muchas; i++) {
    fill(random(255), random(255), random(255), random(255));
    noStroke();
    var ancho = 100;
    var alto = 100;
    //funcion random(x) arroja valor aleatorio entre 0 y X
    ellipse(random(width), random(height), random(ancho), random(alto));


  }

}