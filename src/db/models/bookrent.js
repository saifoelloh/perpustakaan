const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class BookRent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.book = this.belongsTo(models.Book, {
        foreignKey: 'bookId',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        as: 'book',
      })
      this.rent = this.belongsTo(models.Rent, {
        foreignKey: 'rentId',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        as: 'rent',
      })
    }
  }
  BookRent.init(
    {
      id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      bookId: {
        type: DataTypes.UUID,
        references: {
          model: 'books',
          key: 'id',
        },
      },
      rentId: {
        type: DataTypes.UUID,
        references: {
          model: 'rents',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'BookRent',
    },
  )
  return BookRent
}

