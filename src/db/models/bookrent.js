'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BookRent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  BookRent.init({
    bookId: DataTypes.UUID,
    rentId: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'BookRent',
  });
  return BookRent;
};