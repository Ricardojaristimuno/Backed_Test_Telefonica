const express = require('express');
var cors = require('cors')
var logincomponent= require('../../index')
var app= logincomponent.app
const sequelize = require('../database/model.js');
const rateLimit = require('express-rate-limit');


app.use(cors())
app.use(express.json({ limit: '1mb' }));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 300
});

app.use(limiter);


//Conexión a base de datos
sequelize.authenticate()
    .then(() => {
        console.log('Conexión establecida con éxito.');
    })
    .catch(err => {
        console.error('No se pudo conectar a la base de datos:', err);
    });





