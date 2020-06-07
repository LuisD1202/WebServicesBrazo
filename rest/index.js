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



const server= app.listen(app.get('port'), ()=>{
     
   console.log('Servidor conectado en puerto 3000')
});

const io =socket(server);

io.on('connect',(socket)=>{

  console.log('cliente conectado',socket.id);
  

 socket.on('envio',(msj)=>{
   
 console.log(msj);
  io.emit('recibe',msj);
   
  });
  
 
 
 socket.on('disconnect',()=>{
  console.log('cliente desconectado');
 });


});
