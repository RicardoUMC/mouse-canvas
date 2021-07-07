var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var ancho = cuadrito.width;
var alto = cuadrito.height;
var stapPls;

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
 
var colorcito = "red";

document.addEventListener("mousedown", activarRaton );
document.addEventListener("mousemove", dibujarFigura );
document.addEventListener("mouseup", desactivarRaton );

function activarRaton(evento)
{
  stapPls = false;
}

function dibujarFigura(trazo)
{
  var equis = trazo.layerX ;
  var ye = trazo.layerY ;
  if (stapPls == false)
  {
    dibujarLinea(colorcito, equis + 1, ye + 1, equis - 1, ye - 1, papel);
  }
}

function desactivarRaton(parar)
{
  stapPls = true;
}
