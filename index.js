const express = require('express');
const requireAll = require('require-all');
const app = express();
const port= 3000;
const dotenv= require('dotenv');
const sequelize = require('./src/database/model');
const User = require('./src/database/user');
const Cupos = require('./src/database/rate');
dotenv.config();

app.listen(port, () => {
  console.log('Aplicacion escuchando en el puerto ' + port);
});
module.exports = {
  app: app
}

const scripts = requireAll({
  dirname: __dirname + '/src',
  filter:  /^(.+)\.js$/, 
});

// Ejecuta todos los scripts
for (const scriptName in scripts) {
  const script = scripts[scriptName];
  if (typeof script.start === 'function') {
    script.start();
  }
}




// Sincroniza los modelos con la base de datos
sequelize.sync({ force: true }).then(async () => {

  console.log('tablas creadas');

  // Crear algunos datos de ejemplo
  const user = await User.create({
    name: 'Ricardo Aristimuño',
    mail: 'ricardojaristimuno@gmail.com'
  });

  await Cupos.create({
    balance: 95.99,
    userId: user.id,
    datos: 200,
    cellphone_number:'04141558014',
    platform:'Prepago',
    consumed_data: 50,
    cutoff_date: '2024/09/20'
  });

  await Cupos.create({
    balance: 120.99,
    userId: user.id,
    datos: 400,
    cellphone_number:'04241150267',
    platform:'Postpago',
    consumed_data: 150,
    cutoff_date: '2024/09/27'
  });

  console.log('Datos Creados');
}).catch(error => {
  console.error('Error al sincronizar la base de datos', error);
});





