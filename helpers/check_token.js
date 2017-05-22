const methods = {}
const jwt = require('jsonwebtoken')
require('dotenv').config()

methods.check_token = (req, res, next) => {
  let token = req.headers.token
  console.log('ini file dotenv '+process.env.SECRETKEY);
  jwt.verify(token, process.env.SECRETKEY, (err, decoded) => {
    if(decoded){
      req.body.role = decoded.role
      next()
    } else {
      res.json({err})
    }
  })
}

module.exports = methods