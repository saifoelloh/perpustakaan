const jwt = require('jsonwebtoken')
require('dotenv').config()

const { APP_KEY } = process.env

const checkAuthMw = (req, res, next) => {
  const token = req.cookies?.token
  if (token === undefined) {
    return res.status(401).end()
  }

  const isLoggedIn = jwt.verify(token, APP_KEY)
  if (!isLoggedIn) {
    console.log(isLoggedIn, 'ini')
    return res.status(401).end()
  }

  next()
}

module.exports = checkAuthMw
