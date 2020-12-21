const { Router } = require('express')
const {
  getAllAuthor,
  storeAuthor,
  getAuthorById,
  updateAuthorById,
  deleteAuthorById,
} = require('../controller/author')
const checkAuthMw = require('../middleware/auth')
const fileUploadMw = require('../middleware/file-upload')

const AuthorRouter = new Router()

AuthorRouter.get('/', checkAuthMw, getAllAuthor)
  .post('/', fileUploadMw, checkAuthMw, storeAuthor)
  .get('/:id', checkAuthMw, getAuthorById)
  .put('/:id', fileUploadMw, checkAuthMw, updateAuthorById)
  .delete('/:id', checkAuthMw, deleteAuthorById)

module.exports = AuthorRouter
