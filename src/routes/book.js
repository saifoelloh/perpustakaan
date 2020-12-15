const { Router } = require("express");

const {
  getAllBook,
  storeBook,
  getBookById,
  updateBookById,
  deleteBookById
} = require("../controller/book");
const checkAuthMw = require("../middleware/auth");

const BookRouter = new Router();

BookRouter.get("/", checkAuthMw, getAllBook)
  .post("/", checkAuthMw, storeBook)
  .get("/:id", checkAuthMw, getBookById)
  .put("/:id", checkAuthMw, updateBookById)
  .delete("/:id", checkAuthMw, deleteBookById);

module.exports = BookRouter;
