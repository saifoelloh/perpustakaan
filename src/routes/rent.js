const { Router } = require("express");
const {
  getAllRent,
  storeRent,
  getRentById,
  updateRentById,
  deleteRentById
} = require("../controller/rent");
const checkAuthMw = require("../middleware/auth");

const RentRouter = new Router();

RentRouter.get("/", checkAuthMw, getAllRent)
  .post("/", checkAuthMw, storeRent)
  .get("/:id", checkAuthMw, getRentById)
  .put("/:id", checkAuthMw, updateRentById)
  .delete("/:id", checkAuthMw, deleteRentById);

module.exports = RentRouter;
