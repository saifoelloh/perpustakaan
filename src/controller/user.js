const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const { User } = require('../db/models')
const { APP_KEY } = process.env

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

exports.userLogin = async (req, res) => {
  const user = await User.findOne({
    where: {
      email: req.body.email,
    },
  })
  const passComparation = await bcrypt.compare(req.body.password, user.password)
  if (!passComparation) {
    return res.statusCode(401)
  }

  const token = jwt.sign(user, APP_KEY, { expiresIn: '6h' })
  res.cookie('token', token, {
    httpOnly: true,
    maxAge: 1000 * 60 ** 2 * 24,
    sameSite: true,
  })

  return res.statusCode(204)
}

exports.uesrLogout = async (req, res) => {
  res.clearCookie('token')
  return res.statusCode(204)
}
