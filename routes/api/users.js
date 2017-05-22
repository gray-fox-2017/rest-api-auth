var express = require('express');
var router = express.Router();
var usersController = require('../../controllers/users_controller');
var helpers = require('../../helpers/util');

/* GET users listing. */
router.get('/', helpers.admin, usersController.getAllUsers);
router.get('/:id', helpers.auth, usersController.getSingleUser);
router.post('/', helpers.admin, usersController.createUser);
router.delete('/:id', helpers.admin, usersController.deleteUser);
router.put('/:id', helpers.auth, usersController.updateUser);

module.exports = router;
