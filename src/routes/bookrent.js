const { Router } = require("express");

const {
  getAllBookRent,
  storeBookRent,
  getBookRentById,
  updateBookRentById,
  deleteBookRentById
} = require("../controller/bookrent");
const checkAuthMw = require("../middleware/auth");

const BookRentRouter = new Router();

BookRentRouter.get("/", checkAuthMw, getAllBookRent)
  .post("/", checkAuthMw, storeBookRent)
  .get("/:id", checkAuthMw, getBookRentById)
  .put("/:id", checkAuthMw, updateBookRentById)
  .delete("/:id", checkAuthMw, deleteBookRentById);

module.exports = BookRentRouter;
