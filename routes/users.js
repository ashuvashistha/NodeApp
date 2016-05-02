var express = require('express');
var user = require('../controller/UserController');
var db = require('../controller/Connection');
var router = express.Router();

module.exports= function(passport){
  
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('user');
});

router.post('/AddUser', function(req, res, next) {
  user.addUser(req);
});

router.get('/getUser', function(req, res, next) {
  user.getUser().then(function(data)
  {
    res.json(data);
  });
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

/* GET users listing. */
router.get('/loginfacebook', function(req, res, next) {
  res.render('facebook'); 
});

 
/*router.get('/login/facebook', 
  passport.authenticate('facebook', { scope : 'email' }
));*/
 
 
    router.get('/login/facebook', passport.authenticate('facebook', { scope : 'email' }));

 
 // handle the callback after facebook has authenticated the user
router.get('/login/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect : '/home',
    failureRedirect : '/'
  }));
  
  return router;
}
 