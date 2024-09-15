const { DataTypes } = require('sequelize');
const sequelize = require('./model');
const User = require('./user');


const Cupos = sequelize.define('rates', {
    // Definición de campos

    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true 
    },      
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: User,
          key: 'id',
        },
      },
    balance: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    datos: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    consumed_data: {
        type: DataTypes.DECIMAL,
        allowNull: false
      },
    cellphone_number: {
        type: DataTypes.STRING,
        allowNull: false
      },
    platform: {
      type: DataTypes.ENUM,
      values: ['Prepago', 'Postpago'],
      allowNull: false
    },
    cutoff_date: {
        type: DataTypes.DATE,
        values: ['Prepago', 'Postpago'],
        allowNull: false
      },
    
  }, {
    timestamps: false,
  });

User.hasMany(Cupos, { foreignKey: 'userId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
Cupos.belongsTo(User, { foreignKey: 'userId' });


  module.exports = Cupos;
