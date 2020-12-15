const { Router } = require("express");

const {
  getAllBookRent,
  storeBookRent,
  getBookRentById,
  updateBookRentById,
  deleteBookRentById
} = require("../controller/bookrent");

const BookRentRouter = new Router();

BookRentRouter.get("/", getAllBookRent)
  .post("/", storeBookRent)
  .get("/:id", getBookRentById)
  .put("/:id", updateBookRentById)
  .delete("/:id", deleteBookRentById);

module.exports = BookRentRouter;
