'use strict';
const { encrypt } = require('../helpers/bcrypt'),
  sequelize = require('sequelize'),
  Op = sequelize.Op
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'Email not valid'
        },
        isUnique(value) {
          return User.findOne({
            where: {
              email: value,
              id: {
                [Op.ne]: this.id
              }
            }
          })
            .then(function (data) {
              if (data !== null) {
                throw new Error(`Duplicated Email`)
              }
            })
            .catch(function (err) {
              throw err
            })
        }
      }
    },
    password: {
      type: DataTypes.STRING
    },
    role: {
      type: DataTypes.STRING
    },
  }, {
      hooks: {
        beforeValidate: (user) => {
          user.password = encrypt(user.password)
        }
      }
    });
  User.associate = function (models) {
    // associations can be defined here
  };
  return User;
};