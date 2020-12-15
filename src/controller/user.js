const bcrypt = require('bcrypt')
const { User } = require('../db/models')

exports.getAllUser = async (req, res) => {
  const { page = 0, show = 10, sortBy = 'createdAt', orderBy = 'ASC' } = req.query
  const users = await User.findAndCountAll({
    order: [[sortBy, orderBy]],
    include: 'rents',
    offset: page * show,
    limit: show,
  })

  return res.status(200).json(users)
}

exports.storeUser = async (req, res) => {
  const password = await bcrypt.hash(req.body.password, 10)
  const user = await User.create({ ...req.body, password })
  return res.status(201).json(user)
}

exports.getUserById = async (req, res) => {
  const user = await User.findByPk(req.params.id)
  return res.status(200).json(user)
}

exports.updateUserById = async (req, res) => {
  const user = await User.findByPk(req.params.id)
  let password = user.password
  if (req.body?.password !== undefined) {
    const password = await bcrypt.hash(req.body.password, 10)
  }

  const result = await user.update({
    ...req.body,
    password,
  })

  return res.status(200).json(result)
}

exports.deleteUserById = async (req, res) => {
  const user = await User.destroy({
    where: { id: req.params.id },
  })

  return res.statusCode(200)
}
