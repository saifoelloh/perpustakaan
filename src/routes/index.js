const { Router } = require('express');
const MainRouter = new Router();

const UserRouter = require('./user');
const AuthorRouter = require('./author');
const RentRouter = require('./rent');

MainRouter.use('/user', UserRouter);
MainRouter.use('/author', AuthorRouter);
MainRouter.use('/rent', RentRouter);

module.exports = MainRouter;
