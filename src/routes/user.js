const { Router } = require("express");
const {
  getAllUser,
  storeUser,
  getUserById,
  updateUserById,
  deleteUserById,
  userLogin,
  userLogout
} = require("../controller/user");
const checkAuthMw = require("../middleware/auth");

const UserRouter = new Router();

UserRouter.get("/", checkAuthMw, getAllUser)
  .post("/", checkAuthMw, storeUser)
  .get("/:id", checkAuthMw, getUserById)
  .put("/:id", checkAuthMw, updateUserById)
  .delete("/:id", checkAuthMw, deleteUserById)
  .post("/login", userLogin)
  .post("/logout", checkAuthMw, userLogout);

module.exports = UserRouter;
