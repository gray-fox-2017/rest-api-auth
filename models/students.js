'use strict';
module.exports = function(sequelize, DataTypes) {
  var Students = sequelize.define('Students', {
    name: DataTypes.STRING,
    gender: DataTypes.STRING,
    age: DataTypes.INTEGER,
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Students;
};
