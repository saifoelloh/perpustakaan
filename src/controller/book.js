const { Book } = require('../db/models')

exports.getAllBook = async (req, res) => {
  const {
    page = 0, show = 10, sortBy = 'createdAt', orderBy = 'ASC',
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
  const book = await Book.create({ ...req.body })
  return res.status(200).json(book)
}

exports.getBookById = async (req, res) => {
  const book = await Book.findByPk(req.params.id)
  return res.status(200).json(book)
}

exports.updateBookById = async (req, res) => {
  const book = await Book.findByPk(req.params.id)
  const result = await book.update({
    ...req.body,
  })

  return res.status(200).json(result)
}

exports.deleteBookById = async (req, res) => {
  const book = await Book.destroy({
    where: { id: req.params.id },
  })

  return res.statusCode(200)
}
