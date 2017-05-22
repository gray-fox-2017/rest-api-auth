var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.send('Welcome to Hacktiv8 database!');
});

module.exports = router;
