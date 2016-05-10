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
    console.log(data);
    res.json(data);
  });
 
});

// router.post('/login', passport.authenticate('login', {
//     successRedirect: '/getuser',
//     failureRedirect: '/',
//     failureFlash : true 
//   },function(err,user)
//   {
    
//   }));

router.post('/login', function handleLocalAuthentication(req, res, next) {
    passport.authenticate('login', function(err, user, info) {
        if (err) return next(err);
        if (!user) {
            return res.json(403, {
                message: "no user found"
            });
        }

        // Manually establish the session...
        req.login(user, function(err) {
            if (err) return next(err);
            console.log(req.session);
            return res.json({
                message: 'user authenticated',
            });
        });

    })(req, res, next);
});

router.get('/getUserCallback', function(req, res, next) {
  var users;
  console.log(req.session);
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

 router.get('/login/facebook', passport.authenticate('facebook', { scope : ['email'] }));

 // handle the callback after facebook has authenticated the user
router.get('/login/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect : '/users',
    failureRedirect : '/users/loginfacebook'
  }));
  
  return router;
}
 
 // Simple route middleware to ensure user is authenticated.
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  req.session.error = 'Please sign in!';
  res.redirect('/signin');
}