'use strict';
module.exports = function(sequelize, DataTypes) {
  var Students = sequelize.define('Students', {
    name: DataTypes.STRING,
    gender: DataTypes.STRING,
    age: DataTypes.INTEGER,
    address: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
        isUnique: function(value, next) {
          Students.find({
            where: {email: value},
            attributes: ['id']
          })
          .done(function(error, user) {
            if (error)
                // Some unexpected error occured with the find method.
                return next('Email address already in use!');
            if (user)
                // We found a user with this email address.
                // Pass the error to the next method.
                return next('Email address already in use!');
            // If we got this far, the email address hasn't been used yet.
            // Call next with no arguments when validation is successful.
            next();
          });
        }
      }
    },
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
