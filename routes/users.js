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
});

router.get('/getUser', function(req, res, next) {
  var users;
  user.getUser().then(function(data)
  {
  res.json(data);
  });
  // res.end();
});

router.get('/getUserCallback', function(req, res, next) {
  var users;
  user.getUserCallback(function(err, user)
  {
    if(user)
    {
      res.json(user);
    }
  });
  
});

module.exports = router;