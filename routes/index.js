const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const jwtHelpers = require('../helpers/check_token')

router.get('/', (req, res) => {
  res.send('Ini halaman REST API CRUD, you can read the instruction from https://github.com/uciarahito/rest-api-auth')
})

router.get('/api/users', userController.getAll)
router.get('/api/user/:id', jwtHelpers.check_token_user_admin, userController.getById)
router.post('/api/users', jwtHelpers.check_token_admin, userController.insertOne)
router.put('/api/user/:id', jwtHelpers.check_token_user_admin, userController.updateById)
router.delete('/api/user/:id', jwtHelpers.check_token_admin, userController.deleteById)

router.post('/api/signup', userController.signup)
router.post('/api/signin', userController.signin)

module.exports = router