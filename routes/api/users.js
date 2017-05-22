var express = require('express');
var router = express.Router();
var usersController = require('../../controllers/users_controller');

/* GET users listing. */
router.get('/', usersController.getAllUsers);
router.get('/:id', usersController.getSingleUser);
router.post('/', usersController.createUser);
router.delete('/:id', usersController.deleteUser);
router.put('/:id', usersController.updateUser);

module.exports = router;
