const { Router } = require("express");
const {
  getAllAuthor,
  storeAuthor,
  getAuthorById,
  updateAuthorById,
  deleteAuthorById
} = require("../controller/author");
const checkAuthMw = require("../middleware/auth");

const AuthorRouter = new Router();

AuthorRouter.get("/", checkAuthMw, getAllAuthor)
  .post("/", checkAuthMw, storeAuthor)
  .get("/:id", checkAuthMw, getAuthorById)
  .put("/:id", checkAuthMw, updateAuthorById)
  .delete("/:id", checkAuthMw, deleteAuthorById);

module.exports = AuthorRouter;
