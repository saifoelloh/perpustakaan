const { BookRent } = require("../db/models");

exports.getAllBookRent = async (req, res) => {
  const {
    page = 0,
    show = 10,
    sortBy = "createdAt",
    orderBy = "ASC"
  } = req.query;
  const bookRent = await BookRent.findAndCountAll({
    order: [[sortBy, orderBy]],
    offset: page * show,
    limit: show
  });

  return res.status(200).json(bookRent);
};

exports.storeBookRent = async (req, res) => {
  const bookRent = await BookRent.create({ ...req.body });
  return res.status(200).json(bookRent);
};

exports.getBookRentById = async (req, res) => {
  const bookRent = await BookRent.findByPk(req.params.id);
  return res.status(200).json(bookRent);
};

exports.updateBookRentById = async (req, res) => {
  const bookRent = await BookRent.findByPk(req.params.id);
  const result = await bookRent.update({
    ...req.body
  });

  return res.status(200).json(result);
};

exports.deleteBookRentById = async (req, res) => {
  const bookRent = await BookRent.destroy({
    where: { id: req.params.id }
  });

  return res.statusCode(200);
};
