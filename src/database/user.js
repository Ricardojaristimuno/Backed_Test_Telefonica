const { DataTypes } = require('sequelize');
const sequelize = require('./model');

//***Definición de tabla de Usuario****
const User = sequelize.define('users', {


    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true 
    },    
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },    
    mail: {
      type: DataTypes.STRING,
      allowNull: false
    },

  }, {
    timestamps: false,
  });

  module.exports = User;
