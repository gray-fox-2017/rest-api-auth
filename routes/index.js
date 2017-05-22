const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

// router.get('/', (req, res) => {
//   res.send('Hello')
// })

router.get('/api/users', userController.getAll)
router.post('/api/users', userController.insertOne)

module.exports = router