'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    name: type: DataTypes.STRING,
    validate: {
        isUnique: function(value, next) {
            User.find({
                where: {name: value}
            })
            .then(function(error) {
              if (error){
                // Some unexpected error occured with the find method.
                // return next(error);
                return next('Name already in use!');
              }
              next();
            });
        }
    },
    username: {
      type: DataTypes.STRING,
      validate: {
          isUnique: function(value, next) {
              User.find({
                  where: {username: value}
              })
              .then(function(error) {
                if (error){
                  // Some unexpected error occured with the find method.
                  // return next(error);
                  return next('Username already in use!');
                }
                next();
              });
          }
      }
    },
    password: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
          isUnique: function(value, next) {
              User.find({
                  where: {email: value}
              })
              .then(function(error) {
                if (error){
                  return next('Email address already in use!');
                }
                next();
              });
          }
      }
    },
    role: {
      type: DataTypes.STRING,
      defaultValue: 'user'
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return User;
};