'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      name: DataTypes.STRING,
      phone: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      role: {
        type: DataTypes.ENUM('admin', 'member'),
        defaultValue: 'member',
      },
      photo: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'users',
    }
  );
  return User;
};
