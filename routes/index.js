const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

// router.get('/', (req, res) => {
//   res.send('Hello')
// })

router.get('/api/users', userController.getAll)
router.get('/api/user/:id', userController.getById)
router.post('/api/users', userController.insertOne)
router.put('/api/user/:id', userController.updateById)
router.delete('/api/user/:id', userController.deleteById)

router.post('/api/signup', userController.signup)

module.exports = router