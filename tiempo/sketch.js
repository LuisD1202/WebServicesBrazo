var sun = new Image();
var moon = new Image();
var earth = new Image();
var BaseArm = new Image();
var art01 = new Image();
var art02 = new Image();
var art03 = new Image();
var art04 = new Image();
var art05 = new Image();
var artP01 = new Image();
var artP02 = new Image();

function init() {
  sun.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png';
  moon.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png';
  earth.src = 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png';
  BaseArm.src = 'img/Base.png';
  art01.src = 'img/art1.png';
  art02.src = 'img/art2.png';
  art03.src = 'img/art3.png';
  art04.src = 'img/art4.png';
  art05.src = 'img/art5.png';
  artP01.src = 'img/pinza1.png';
  artP02.src = 'img/pinza2.png';
  window.requestAnimationFrame(draw);
}
var g1=0;
var g2=0;
var g3=0;
var arti= "";

function MoveArt01(angle , articulacion)
{
  arti = articulacion;
  g1 = g1 + angle;
}

function MoveArt02(angle , articulacion)
{
  arti = articulacion;
  g2 = g2 + angle;
}

function MoveArt03(angle , articulacion)
{
  arti = articulacion;
  g3 = g3 + angle;
}

function draw() 
{
  var ctx = document.getElementById('canvas').getContext('2d');
  ctx.globalCompositeOperation = 'destination-over';
  ctx.clearRect(0, 0, 800 , 500); // clear canvas 
  ctx.save(); // Detiene la rotacion en el canvas
  ctx.translate(400, 250); // Traslada la Tierra al punto de origen respecto a la orbita
  ctx.drawImage(BaseArm,-51,-32,100,100);
  ctx.save();

  if(arti == "Art01")
  {
    console.log("Se movio la Art 01");
    ctx.rotate( g1 * Math.PI / 180);
    ctx.translate(-30, 30);
    ctx.drawImage(art01, -10, -210,80,200);

    ctx.translate(26,-182);
    ctx.drawImage(art02, -32, -39,200,80);

    ctx.translate(0,0);
    ctx.drawImage(art03, 100, -30,150,150);

    ctx.translate(0,0);
    ctx.drawImage(art04, 195, 80,40,80);

    ctx.translate(0,0);
    ctx.drawImage(art05, 195, 135,40,60);

    ctx.translate(0,0);
    ctx.drawImage(artP01, 175, 180,40,60);

    ctx.translate(0,0);
    ctx.drawImage(artP02, 215, 180,40,60);
  }
  else if (arti == "Art02")
  {
    console.log("Se movio la Art 02 ");
  }
  else if (arti == "Art03")
  {
    console.log("Se movio la Art 03 ");
  }
  else if (arti == "Art04")
  {
    console.log("Se movio la Art 04 ");
  }
  else if (arti == "Art05")
  {
    console.log("Se movio la Art 05 ");
  }
  else if (arti == "artP01")
  {
    console.log("Se movio la Art P 01 ");
  }
  else if (arti == "artP02")
  {
    console.log("Se movio la Art P 01 ");
  }


  //ctx.drawImage(art02, -10, -210,80,200);

ctx.restore(); 

  //ctx.beginPath();
  // Moon
 // ctx.save(); //Este save no permite que se mueva la imagen posterior 
  
  /*ctx.rotate(g1 * Math.PI / 180);
  ctx.translate(0, 15); // Lo distancia del centro de la tierra
  ctx.drawImage(moon, -3.5, -3.5);*/
  // Restaura a la visualizacion inicial si se quita se jode todo 

  ctx.restore(); // Restaura a la visualizacion inicial si se quita se jode todo 
  /*ctx.beginPath();
  
  ctx.arc(150, 150, 105, 0, Math.PI * 2, false); // Earth orbit orbita de la tierra
  ctx.stroke(); //Borde de la orbita de la tierra 
  ctx.drawImage(sun, 0, 0, 300, 300);*/
  
  window.requestAnimationFrame(draw);
}
init();