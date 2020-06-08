const express = require('express');
const socket = require('socket.io');
var cors = require ('cors'); 
const route = require('./routes/rest.routes');
var bodyParser = require('body-parser');
const app = express();

  app.set('port', process.env.PORT || 3000)
 

  app.use (cors ({origin:'*'}));
  app.use(bodyParser.urlencoded({extended: false}));
  app.use(bodyParser.json());
  app.use(route)

//Crea el servidor e indica el puerto

const server= app.listen(app.get('port'), ()=>{
     
   console.log('Servidor conectado en puerto 3000')
});

//Inicia los sockets y le indica el servidor.

const io =socket(server);

// Escucha el cliente que se conecta
io.on('connect',(socket)=>{

  console.log('cliente conectado',socket.id);
  

 socket.on('clienteEnvio',(msj)=>{
   
 console.log(msj);
  io.emit('servidorEnvio',msj);
   
  });
  
 
 
 socket.on('disconnect',()=>{
  console.log('cliente desconectado');
 });


});
