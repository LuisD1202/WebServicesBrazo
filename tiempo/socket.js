var socket = io.connect('http://localhost:3000', { 'forceNew': true });

socket.on('recibe', function(data) {
  console.log(data);
  mov(data.articulacion, data.grados, false)
})

function enviarMensaje(art, gra) {
  var movimientos = {
    articulacion: art,
    grados: gra
  };
  socket.emit('envio', movimientos);
 
  return false;
}