const { Book } = require('../db/models')
const fs = require('fs')
const path = require('path')

exports.getAllBook = async (req, res) => {
  const {
    page = 0,
    show = 10,
    sortBy = 'createdAt',
    orderBy = 'ASC',
  } = req.query
  const book = await Book.findAndCountAll({
    order: [[sortBy, orderBy]],
    include: ['author', 'rents'],
    offset: page * show,
    limit: show,
  })

  return res.status(200).json(book)
}

exports.storeBook = async (req, res) => {
  const photo = req?.fileName !== undefined ? req.fileName : ''
  const book = await Book.create({ ...req.body, photo })
  return res.status(200).json(book)
}

exports.getBookById = async (req, res) => {
  const book = await Book.findByPk(req.params.id)
  return res.status(200).json(book)
}

exports.updateBookById = async (req, res) => {
  const book = await Book.findByPk(req.params.id)
  let photo = book.photo
  if (req?.fileName !== undefined) {
    const filePath = path.join('/app', photo)
    fs.unlinkSync(filePath)

    photo = req.fileName
  }

  const result = await book.update({ ...req.body, photo })
  return res.status(200).json(result)
}

exports.deleteBookById = async (req, res) => {
  const book = await Book.findByPk(req.params.id)

  const filePath = path.join('/app', book.photo)
  fs.unlinkSync(filePath)

  await book.destroy()

  return res.status(200).end()
}
