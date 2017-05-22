const db = require('../models')
let methods = {}

methods.getAll = (req, res) => {
  db.User.findAll()
  .then(response => {
    console.log(response);
    res.json(response)
  })
  .catch(err => {
    res.json(err)
  })
}   // getAll

module.exports = methods