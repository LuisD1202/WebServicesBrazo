var socket = io.connect('http://localhost:3000', { 'forceNew': true });
socket.on('recibe', function(data) {
  console.log(data);
 
})

function addMessage(e) {
  /*var message = {
    author: document.getElementById('username').value,
    text: document.getElementById('texto').value
  };*/
  socket.emit('mensage:', 'Hola');
 
  return false;
}