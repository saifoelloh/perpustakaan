const { Rent } = require("../db/models");

exports.getAllRent = async (req, res) => {
  const {
    page = 0,
    show = 10,
    sortBy = "createdAt",
    orderBy = "ASC"
  } = req.query;
  const rent = await Rent.findAndCountAll({
    order: [[sortBy, orderBy]],
    include: ["user"],
    offset: page * show,
    limit: show
  });

  return res.status(200).json(rent);
};

exports.storeRent = async (req, res) => {
  const rent = await Rent.create({ ...req.body });
  return res.status(201).json(rent);
};

exports.getRentById = async (req, res) => {
  const rent = await Rent.findByPk(req.params.id);
  return res.status(200).json(rent);
};

exports.updateRentById = async (req, res) => {
  const rent = await Rent.findByPk(req.params.id);
  const result = await rent.update({
    ...req.body
  });

  return res.status(200).json(result);
};

exports.deleteRentById = async (req, res) => {
  const rent = await Rent.destroy({
    where: { id: req.params.id }
  });

  return res.status(200).end();
};
