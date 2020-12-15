const { Router } = require("express");

const MainRouter = new Router();

const UserRouter = require("./user");
const AuthorRouter = require("./author");
const RentRouter = require("./rent");
const BookRouter = require("./book");
const BookRentRouter = require("./bookrent");

MainRouter.use("/user", UserRouter);
MainRouter.use("/author", AuthorRouter);
MainRouter.use("/rent", RentRouter);
MainRouter.use("/book", BookRouter);
MainRouter.use("/bookrent", BookRentRouter);

module.exports = MainRouter;
