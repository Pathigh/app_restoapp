'use strict'
var express = require('express');
var bodyParse = require('body-parser');
const bodyParser = require('body-parser');

var app = express();

//rutas archivos

//middlawares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//CORS

//Rutas
app.get('/test', (req, res) => {
    res.status(200).send({
        message: "hola mundo desde mia api de nodejs"
    });
})

//exportar
module.exports = app;