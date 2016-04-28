var express = require('express');
//var user = require('../controller/UserController');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
   res.render('user', {users : user.GetUser()});
   
});



module.exports = router;
    
    
    