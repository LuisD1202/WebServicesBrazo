var socket = io.connect('http://localhost:3000', { 'forceNew': true });

socket.on('servidorEnvio', function(data) {
  console.log(data);
  mov(data.articulacion, data.grados, false)
})

function enviarMensaje(movJson) {
  socket.emit('clienteEnvio', movJson);
 
  return false;
}