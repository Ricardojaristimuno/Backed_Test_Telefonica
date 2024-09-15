const rateLimit = require('express-rate-limit');
var express = require('express') 
var logincomponent= require('../../index.js')
var app= logincomponent.app
var cors = require('cors')
const User = require('../database/user.js');
const Cupos = require('../database/rate');


//Limitador de peticiones por cantidad de tiempo
app.use(cors())
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({extended:true}));
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});

app.use(limiter);


    app.get('/usuarios', function(req, res) {

      User.findAll()
      .then(users => {  
        res.json(users)
      })
      .catch(err => {
        console.error('Error fetching users:', err);
      });

    }); 
 

    app.get('/cupos', function(req, res) {

      Cupos.findAll({
        include: [{
          model: User,
          attributes: ['id'] 
        }]
      })
      .then(Cupos => {
        res.json(Cupos)
      })
      .catch(err => {
        console.error('Error fetching posts with users:', err);
      });

    }); 
 



