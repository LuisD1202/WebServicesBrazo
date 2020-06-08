var base = new Image();
var art1 = new Image();
var art2 = new Image();
var art3 = new Image();
var art4 = new Image();
var pinza1 = new Image();
var pinza2 = new Image();
var g1,g2,g3,g4,gP;


function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}


function movAction(msjBody) {
  var url = 'http://localhost:3000/grados';
 
  fetch(url, {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(msjBody), // data can be `string` or {object}!
    headers:{
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
  .catch(error => console.error('Error:', error))
  .then(response => {console.log('Success:', response);
  					enviarMensaje(msjBody);});
}


function mov(art, gr,server, nomcliente){

	document.getElementById("v" + art).innerHTML = gr;

	switch(art){

		case "art1": 
      g1=gr;

		 break;
		case "art2": 
      g2=gr;

		 break;
		case "art3": 
      g3=gr;

		 break;
		case "art4": 
      g4=gr;

		 break;
		case "pinzas": 
      gP=gr;
		 break;
    
  }
  if(server){

    var movimientos = {
      cliente: nomcliente,
      articulacion: art,
      grados: gr
    };
    
    movAction(movimientos); // Envía a la API
  }else{
    document.getElementById(art).value=gr;
  }

}
function init() {
  base.src = 'img/Base.png';
  art1.src = 'img/art1.png';
  art2.src = 'img/art2.png';
  art3.src = 'img/art1.png';
  art4.src = 'img/art5.png';
  pinza1.src = 'img/pinza1.png';
  pinza2.src = 'img/pinza2.png';
  
 
  window.requestAnimationFrame(draw);
}

function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');
 

  ctx.clearRect(0, 0, 1000, 800); // clear canvas
  ctx.save();
  ctx.translate(300, 450);

  // base
  
  ctx.drawImage(base, -45, -30);
 
  // art1

  ctx.rotate((Math.PI/180)*g1);
  ctx.translate(0,0);
  ctx.drawImage(art1, -25, -175);
  // art2
  
  ctx.translate(-5, -145);
  ctx.rotate((Math.PI/180)*g2);
  ctx.translate(0, 0);
  ctx.drawImage(art2, -30, -35);
  
  // art3

   ctx.translate(150, 0);
   ctx.rotate((Math.PI/180)*g3);
   ctx.translate(0, 0);
   ctx.drawImage(art3, -20, -30,40,190);
   
  // art4

  ctx.translate(0, 130);
  ctx.rotate((Math.PI/180)*g4);
  ctx.translate(0, 0);
  ctx.drawImage(art4, -15, -12,35,65);

  // Pinzas
  ctx.save();
  ctx.translate(-5, 41.5);
  ctx.rotate((Math.PI/180)*-gP);
  ctx.translate(0, 0);
  ctx.drawImage(pinza1, -21, -5);

  ctx.restore();
  ctx.translate(10, 41.5);
  ctx.rotate((Math.PI/180)*gP);
  ctx.translate(0, 0);
  ctx.drawImage(pinza2, -6, -5);
 
  ctx.restore();
    
  window.requestAnimationFrame(draw);
}

init();

