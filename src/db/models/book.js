const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.author = this.belongsTo(models.Author, {
        foreignKey: 'authorId',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        as: 'author',
      })
      this.rents = this.belongsToMany(models.Rent, {
        through: 'book_rents',
        foreignKey: 'rentId',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        as: 'rents',
      })
    }
  }
  Book.init(
    {
      id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      title: DataTypes.STRING,
      authorId: DataTypes.UUID,
      description: DataTypes.TEXT,
      release: DataTypes.NUMBER,
      photo: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Book',
      tableName: 'books',
    },
  )
  return Book
}
