const { DataTypes } = require('sequelize');
const sequelize = require('./model');

const User = sequelize.define('users', {
    // Definición de campos

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
