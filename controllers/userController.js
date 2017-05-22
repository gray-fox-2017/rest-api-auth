const db = require('../models')
let methods = {}

methods.getAll = (req, res) => {
  db.User.findAll()
  .then(response => {
    console.log('Get all data users success');
    res.json(response)
  })
  .catch(err => {
    res.json({err})
  })
}   // getAll

methods.insertOne = (req, res) => {
  db.User.create(req.body)
  .then(response => {
    console.log('Insert data user success');
    res.json(response)
  })
  .catch(err => {
    res.json({err})
  })
}

module.exports = methods