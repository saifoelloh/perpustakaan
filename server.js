const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
require('dotenv').config()
const { Sequelize } = require('sequelize')
const path = require('path')
const MainRouter = require('./src/routes')

const app = express()
const {
  APP_PORT,
  DB_DATABASE,
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
} = process.env

const sequelize = new Sequelize(DB_DATABASE, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: 'postgres',
})

sequelize
  .authenticate()
  .then(() => console.log('[LOG] create connection successfully'))
  .catch((err) => console.log('[ERR] ', err))

app
  .use(logger('dev'))
  .use(cors())
  .use(cookieParser())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())

app.use('/api', MainRouter)
app.use('/files', express.static(path.join(__dirname, 'uploads')))

app.listen(APP_PORT, () => console.log(`Running on port ${APP_PORT}`))
