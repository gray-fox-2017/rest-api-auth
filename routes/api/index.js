var express = require('express');
var router = express.Router();
var usersController = require('../../controllers/users_controller');

router.post('/signup', usersController.signUp);
router.post('/signin', usersController.signIn);

module.exports = router;
