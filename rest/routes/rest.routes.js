const express = require('express');
const route = express.Router();
const eventos= require('../controllers/rest.controller');

route.get('/usuario',eventos.getUsuarios);
route.post('/grados',eventos.Transform);


module.exports = route;