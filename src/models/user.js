const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    static associate(models) {}
  }
  user.init(
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
      modelName: 'user',
    }
  );
  return user;
};
