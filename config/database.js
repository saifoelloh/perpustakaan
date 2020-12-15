require('dotenv').config();

const { DB_DATABASE, DB_USER, DB_PASSWORD, DB_HOST } = process.env;

module.exports = {
  development: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    host: DB_HOST,
    dialect: 'postgres',
  },
};
