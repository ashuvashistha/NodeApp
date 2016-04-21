var express = require('express');
var user = require('../controller/UserController');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send(user.GetUser());
   res.render('user', {users : user.GetUser()});
   
});



module.exports = router;
    
    
    