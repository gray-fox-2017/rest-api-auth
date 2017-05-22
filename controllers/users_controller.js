require('dotenv').config();
const db = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
let secret = process.env.SECRET_KEY;

function getAllUsers(req, res) {
  db.Students.findAll({
    order: "id ASC"
  })
  .then(student => res.send(student))
  .catch(err => res.send(err.message));
}

function getSingleUser(req, res) {
  let id = req.params.id;
  db.Students.findById(id)
  .then(student => res.send(student))
  .catch(err => res.send(err.message));
}

function createUser(req, res) {
  let hash = bcrypt.hashSync(req.body.password, 8);

  db.Students.create({
    name : req.body.name,
    gender : req.body.gender,
    age : req.body.age,
    address : req.body.address,
    email : req.body.email,
    username : req.body.username,
    password : hash,
    role : req.body.role
  })
  .then(() => res.send(`Create user success!!`))
  .catch(err => res.send(err.message));
}

function deleteUser(req, res) {
  db.Students.destroy({
    where : {
      id : req.params.id
    }
  })
  .then(() => res.send('Delete user success!!'))
  .catch(err => res.send(err.message));
}

function updateUser(req, res) {
  let hash = bcrypt.hashSync(req.body.password, 8);

  db.Students.findById(req.params.id)
  .then(student => {
    db.Students.update({
      name : req.body.name || student.name,
      gender : req.body.gender || student.gender,
      age : req.body.age || student.age,
      address : req.body.address || student.address,
      email : req.body.email || student.email,
      username : req.body.username || student.username,
      password : hash || student.password,
      role : req.body.role || student.role
    }, {
      where: {
        id: req.params.id
      }
    })
    res.send(`Update user success!!`);
  })
  .catch(err => res.send(err.message));
}

function signUp(req, res) {
  db.Students.create({
    name : req.body.name,
    gender : req.body.gender,
    age : req.body.age,
    address : req.body.address,
    email : req.body.email,
    username : req.body.username,
    password : req.body.password,
    role : req.body.role
  })
  .then(() => res.send(`Create user success!!`))
  .catch(err => res.send(err.message));
}

function signIn(req, res) {
  db.Students.find({
    where: {
      username : req.body.username
    }
  })
  .then(user => {
    bcrypt.compare(req.body.password, user.password, function(err, result) {
      if(result) {
        let token = jwt.sign({role: user.role, id: user.id}, secret);
        res.send(token);
      } else {
        res.send("Wrong password..")
      }
    })
  })
  .catch(err => res.send(err.message));
}

module.exports = {
  getAllUsers, getSingleUser, createUser, deleteUser, updateUser, signUp, signIn
};
