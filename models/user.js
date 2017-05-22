'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      validate: {
        len : function(value, next) {
          if (value.length < 5) {
            next('Name Length must min 5 characters')
          }
          next()
        },
        isUnique: function(value, next) {
          User.find({
              where: {name: value}
          })
          .then(function(error) {
            if (error){
              // Some unexpected error occured with the find method.
              // return next(error);
              next('Name already in use!');
            }
            next();
          })
        }
      }
    },
    username: {
      type: DataTypes.STRING,
      validate: {
        len : function(value, next) {
          if (value.length < 5) {
            next('Username Length must min 5 characters')
          }
          next()
        },
        isUnique: function(value, next) {
          User.find({
              where: {username: value}
          })
          .then(function(error) {
            if (error){
              // Some unexpected error occured with the find method.
              // return next(error);
              next('Username already in use!');
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
        isEmail: function(value, next) {
          let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          if(!re.test(value)){
            return next('Email is not valid')
          }
          next()
        },
        isUnique: function(value, next) {
          User.find({
              where: {email: value}
          })
          .then(function(error) {
            if (error){
              return next('Email address already in use!');
            }
            next();
          })
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