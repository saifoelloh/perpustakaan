const { Router } = require('express');
const MainRouter = new Router();

const UserRouter = require('./user');
const AuthorRouter = require('./author');

MainRouter.use('/user', UserRouter);
MainRouter.use('/author', AuthorRouter);

module.exports = MainRouter;
