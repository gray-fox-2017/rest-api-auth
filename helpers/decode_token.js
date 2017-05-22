let methods = {}
const jwt = require('jsonwebtoken')
require('dotenv').config()

methods.decode_token = (token) => {
  try {
    var decoded = jwt.verify(token, process.env.SECRETKEY);
    return decoded
  } catch(err) {
    return 'Error'
  }
}

module.exports = methods