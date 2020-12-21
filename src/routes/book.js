const { Router } = require('express')

const {
  getAllBook,
  storeBook,
  getBookById,
  updateBookById,
  deleteBookById,
} = require('../controller/book')
const checkAuthMw = require('../middleware/auth')
const fileUploadMw = require('../middleware/file-upload')

const BookRouter = new Router()

BookRouter.get('/', checkAuthMw, getAllBook)
  .post('/', fileUploadMw, checkAuthMw, storeBook)
  .get('/:id', checkAuthMw, getBookById)
  .put('/:id', fileUploadMw, checkAuthMw, updateBookById)
  .delete('/:id', checkAuthMw, deleteBookById)

module.exports = BookRouter
