const { Model } = require('sequelize');
const friend = require('./friend');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {}
  }
  User.init(
    {
      username: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      password: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      nama: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      alamat: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      nomorhp: {
        type: DataTypes.STRING(20),
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'users'
    }
  );
  return User;
};
