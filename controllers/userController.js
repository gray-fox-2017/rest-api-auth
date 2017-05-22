const db = require('../models')
const bCrypt = require('bcrypt');
let methods = {}
const saltRounds = 10;
const jwt = require('jsonwebtoken')
require('dotenv').config()
const Sequelize = require('sequelize')

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
  let pwd = req.body.password
  let salt = bCrypt.genSaltSync(saltRounds)
  let generateHash = bCrypt.hashSync(pwd, salt)

  db.User.create({
    name: req.body.name,
    username: req.body.username,
    password: generateHash,
    email: req.body.email
  })
  .then(response => {
    console.log('Insert data user success');
    res.json(response)
  })
  .catch(err => {
    res.json({err})
  })
}   // insertOne

methods.updateById = (req, res) => {
  let pwd = req.body.password
  let salt = bCrypt.genSaltSync(saltRounds)
  let generateHash = bCrypt.hashSync(pwd, salt)

  db.User.update({
    name: req.body.name,
    username: req.body.username,
    password: generateHash,
    email: req.body.email
  }, {
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
    email: req.body.email
  })
  .then(response => {
    console.log('Signup data user success');
    res.json(response)
  })
  .catch(Sequelize.ValidationError, function (err) {
      // respond with validation errors
      res.send(err.message);
  })
  .catch(err => {
    res.json(err)
  })
} //signup

methods.signin = (req, res) => {
  db.User.findOne({
    where: {
      username: req.body.username
    }
  })
  .then(response => {

    let pwdHash = req.body.password
    console.log('Tesss');
    console.log(bCrypt.compareSync(pwdHash, response.password));
    if (bCrypt.compareSync(pwdHash, response.password)) {
      let data = Object.assign({}, response.toJSON())
        console.log(data);
        delete data.password

        let token = jwt.sign(data, process.env.SECRETKEY, {
            expiresIn: '1h'
        })
        res.json({
            message: 'Login is Successful',
            token,
            username: data.username,
            role: data.role
        })
    } else {
        res.json({
            message: 'Your password is not match'
        })
    }
  })
} //signin

module.exports = methods