const { Author } = require("../db/models");

exports.getAllAuthor = async (req, res) => {
  const {
    page = 0,
    show = 10,
    sortBy = "createdAt",
    orderBy = "ASC"
  } = req.query;
  const author = await Author.findAndCountAll({
    order: [[sortBy, orderBy]],
    include: "books",
    offset: page * show,
    limit: show
  });

  return res.status(200).json(author);
};

exports.storeAuthor = async (req, res) => {
  const author = await Author.create({ ...req.body });
  return res.status(201).json(author);
};

exports.getAuthorById = async (req, res) => {
  const author = await Author.findByPk(req.params.id);
  return res.status(200).json(author);
};

exports.updateAuthorById = async (req, res) => {
  const author = await Author.findByPk(req.params.id);
  const result = await author.update({
    ...req.body
  });

  return res.status(200).json(result);
};

exports.deleteAuthorById = async (req, res) => {
  const author = await Author.destroy({
    where: { id: req.params.id }
  });

  return res.status(200).end();
};
