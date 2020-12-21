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
const checkAuthMw = require('../middleware/auth')
const fileUploadMw = require('../middleware/file-upload')

const UserRouter = new Router()

UserRouter.get('/', checkAuthMw, getAllUser)
  .post('/', fileUploadMw, storeUser)
  .get('/:id', checkAuthMw, getUserById)
  .put('/:id', checkAuthMw, fileUploadMw, updateUserById)
  .delete('/:id', checkAuthMw, deleteUserById)
  .post('/login', userLogin)
  .post('/logout', checkAuthMw, userLogout)

module.exports = UserRouter
