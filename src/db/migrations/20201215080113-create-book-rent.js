'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('book_rents', {
      id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      bookId: {
        type: Sequelize.UUID,
        references: {
          model: 'books',
          key: 'id',
          as: 'book',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      rentId: {
        type: Sequelize.UUID,
        references: {
          model: 'rents',
          key: 'id',
          as: 'rent',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('book_rents')
  },
}
