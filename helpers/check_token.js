const methods = {}
const jwt = require('jsonwebtoken')
require('dotenv').config()

methods.check_token_admin = (req, res, next) => {
  let token = req.headers.token
  console.log('ini file dotenv '+process.env.SECRET_KEY);
  jwt.verify(token, process.env.SECRETKEY, (err, decoded) => {
    if(decoded){
      if (decoded.role === 'admin') {
        next()
      } else {
        res.send('You are not authorized')
      }
    } else {
      res.json({err})
    }
  })
}

methods.check_token_user_admin = (req, res, next) => {
  let token = req.headers.token
  console.log('ini file dotenv'+process.env.SECRET_KEY);
  jwt.verify(token, process.env.SECRETKEY, (err, decoded) => {
    if(decoded){
      if (decoded.role === 'user' || decoded.role === 'admin') {
        next()
      } else {
        res.send('You are not authorized')
      }
    } else {
      res.json({err})
    }
  })
}

module.exports = methods