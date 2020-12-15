const { Router } = require('express');
const {
  getAllAuthor,
  storeAuthor,
  getAuthorById,
  updateAuthorById,
  deleteAuthorById,
} = require('../controller/author');

const AuthorRouter = new Router();

AuthorRouter.get('/', getAllAuthor)
  .post('/', storeAuthor)
  .get('/:id', getAuthorById)
  .put('/:id', updateAuthorById)
  .delete('/:id', deleteAuthorById);

module.exports = AuthorRouter;
