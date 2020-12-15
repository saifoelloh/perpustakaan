const { Router } = require('express')
const {
  getAllUser,
  storeUser,
  getUserById,
  updateUserById,
  deleteUserById,
  userLogin,
  userLogout,
} = require('../controller/user')

const UserRouter = new Router()

UserRouter.get('/', getAllUser)
  .post('/', storeUser)
  .get('/:id', getUserById)
  .put('/:id', updateUserById)
  .delete('/:id', deleteUserById)
  .post('/login', userLogin)
  .post('/logout', userLogout)

module.exports = UserRouter
