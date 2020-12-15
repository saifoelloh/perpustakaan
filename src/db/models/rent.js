const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Rent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.user = this.belongsTo(models.User, {
        foreignKey: 'userId',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        as: 'user',
      })
      this.books = this.belongsToMany(models.Book, {
        through: 'book_rents',
        foreignKey: 'bookId',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        as: 'books',
      })
    }
  }
  Rent.init(
    {
      id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      userId: DataTypes.UUID,
      start: DataTypes.DATE,
      end: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'Rent',
    },
  )
  return Rent
}
