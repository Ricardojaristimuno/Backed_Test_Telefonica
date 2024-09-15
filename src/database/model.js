const Sequelize = require('sequelize');
require('dotenv').config();

//***Configuración de conexión con Base de Datos****

const sequelize = new Sequelize(process.env.BD_NAME, process.env.BD_USERNAME, process.env.BD_PASSWORD, {
  host: 'localhost',
  dialect: 'mysql',
  logging: false, 
});

module.exports = sequelize;
