const { Rent, Router } = require('express');
const {
    getAllRent,
    storeRent,
    getRentById,
    updateRentById,
    deleteRentById,
} = require('../controller/rent');

const RentRouter = new Router();

RentRouter.get('/', getAllRent)
    .post('/',storeRent)
    .get('/:id', getRentById)
    .put('/:id', updateRentById)
    .delete('/:id', deleteRentById)

module.exports = RentRouter;