var express = require('express');
var user = require('../controller/UserController');
var db = require('../controller/Connection');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('user');
});

router.post('/AddUser', function(req, res, next) {
  
  user.addUser(req);
  res.send('successfull');
});

module.exports = router;