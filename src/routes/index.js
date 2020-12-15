const { Router } = require("express");
const MainRouter = new Router();

const UserRouter = require("./user");
const AuthorRouter = require("./author");
const BookRouter = require("./book");

MainRouter.use("/user", UserRouter);
MainRouter.use("/author", AuthorRouter);
MainRouter.use("/book", BookRouter);

module.exports = MainRouter;
