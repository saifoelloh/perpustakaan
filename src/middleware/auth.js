const jwt = require('jsonwebtoken')
require('dotenv').config()

const { APP_KEY } = process.env

const checkAuthMw = (req, res, next) => {
  const { token } = req.cookies
  const isLoggedIn = jwt.verify(token, APP_KEY)
  if (!isLoggedIn) {
    return res.statusCode(401)
  }

  next()
}

module.exports = checkAuthMw
