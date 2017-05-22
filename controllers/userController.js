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

methods.getById = (req, res) => {
  db.User.findById(req.params.id)
  .then(response => {
    console.log('Get data user by id success');
    res.json(response)
  })
  .catch(err => {
    res.json({err})
  })
}   //getById

methods.insertOne = (req, res) => {
  db.User.create(req.body)
  .then(response => {
    console.log('Insert data user success');
    res.json(response)
  })
  .catch(err => {
    res.json({err})
  })
}   // insertOne

methods.updateById = (req, res) => {
  db.User.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  .then(response => {
    console.log('Update data user success');
    res.json(response)
  })
  .catch(err => {
    res.json({err})
  })
}


module.exports = methods