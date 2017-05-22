const db = require('../models')
const bCrypt = require('bcrypt');
let methods = {}
const saltRounds = 10;

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
}   // updateById

methods.deleteById = (req, res) => {
  db.User.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(response => {
    console.log('Delete data user success');
    res.json(response)
  })
} //deleteById

methods.signup = (req, res) => {
  let pwd = req.body.password
  let salt = bCrypt.genSaltSync(saltRounds)
  let generateHash = bCrypt.hashSync(pwd, salt)

  db.User.create({
    name: req.body.name,
    username: req.body.username,
    password: generateHash,
    email: req.body.email,
    role: req.body.role
  })
  .then(response => {
    console.log('Signup data user success');
    res.json(response)
  })
  .catch(err => {
    res.json({err})
  })
}

module.exports = methods