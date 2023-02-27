'use strict';
const { Model } = require('sequelize');
const user = require('./user');
module.exports = (sequelize, DataTypes) => {
  class Friend extends Model {
    static associate(models) {}
  }
  Friend.init(
    {
      person_id:{
        type: DataTypes.STRING(255)
      },
      friend_id:{
        type: DataTypes.STRING(255)
      }
    },
    {
      sequelize,
      timestamps: false,
      modelName: 'friend',
      tableName: 'friends'
    }
  );
  return Friend;
};
