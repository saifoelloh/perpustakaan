const { Author } = require('../db/models')
const fs = require('fs')
const path = require('path')

exports.getAllAuthor = async (req, res) => {
  const {
    page = 0,
    show = 10,
    sortBy = 'createdAt',
    orderBy = 'ASC',
  } = req.query
  const author = await Author.findAndCountAll({
    order: [[sortBy, orderBy]],
    include: 'books',
    offset: page * show,
    limit: show,
  })

  return res.status(200).json(author)
}

exports.storeAuthor = async (req, res) => {
  const photo = req?.fileName !== undefined ? req.fileName : ''
  const author = await Author.create({ ...req.body, photo })
  return res.status(201).json(author)
}

exports.getAuthorById = async (req, res) => {
  const author = await Author.findByPk(req.params.id)
  return res.status(200).json(author)
}

exports.updateAuthorById = async (req, res) => {
  const author = await Author.findByPk(req.params.id)
  let photo = author.photo
  if (req?.fileName !== undefined) {
    const filePath = path.join('/app', photo)
    fs.unlinkSync(filePath)
    photo = req.fileName
  }
  const result = await author.update({
    ...req.body,
  })

  return res.status(200).json(result)
}

exports.deleteAuthorById = async (req, res) => {
  const author = await Author.findByPk(req.params.id)

  const filePath = path.join('/app', author.photo)
  fs.unlinkSync(filePath)

  await author.destroy()

  return res.status(200).end()
}
