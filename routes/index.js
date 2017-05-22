var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.send('Welcome to Hacktiv8 database! <a href="https://github.com/raynormw/rest-api-auth">Click</a> for usage and info..');
});

module.exports = router;
