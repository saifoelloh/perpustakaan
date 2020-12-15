const { Router } = require('express')

const {
  getAllBook,
  storeBook,
  getBookById,
  updateBookById,
  deleteBookById,
} = require('../controller/book')

const BookRouter = new Router()

BookRouter.get('/', getAllBook)
  .post('/', storeBook)
  .get('/:id', getBookById)
  .put('/:id', updateBookById)
  .delete('/:id', deleteBookById)

module.exports = BookRouter
