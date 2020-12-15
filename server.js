const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const { Sequelize } = require('sequelize');
const MainRouter = require('./src/routes');

const app = express();
const {
  APP_PORT,
  DB_DATABASE,
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
} = process.env;

const sequelize = new Sequelize(DB_DATABASE, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: 'postgres',
});

sequelize
  .authenticate()
  .then(() => console.log(`[LOG] connection success`))
  .catch((err) => console.log(`[ERR] `, err));

app
  .use(logger('dev'))
  .use(cors())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json());

app.use('/api', MainRouter);

app.listen(APP_PORT, () => console.log(`Running on port ${APP_PORT}`));
