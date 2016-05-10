var LocalStrategy   = require('passport-local').Strategy;

var db = require('./Connection');
//var assert = require('assert');
var deferred = require('deferred');

module.exports = function(passport){
    var def = deferred();
   passport.serializeUser( (user, done) => {
  var sessionUser = { _id: user._id, name: user.userName, email: user.email }
  done(null, sessionUser)
})

passport.deserializeUser( (sessionUser, done) => {
  // The sessionUser object is different from the user mongoose collection
  // it's actually req.session.passport.user and comes from the session collection
  console.log('hi');
  done(null, sessionUser)
})
    
passport.use('login', new LocalStrategy({
    passReqToCallback : true
  },
  function(req, username, password, done) { 
      
       db(function (err,db)
    {
      collection = db.collection('users');
      var user = collection.findOne({'userName' : username },
      function(err,user)
      {
        if(user)
        {
        return done(null,user);
        }
      });
    //   user.then(function (data)
    //  {
    //    if(data)
    //    {
    //     console.log('user  found');
    //     return done(null,data);        
    //    }
    //    else{
    //    console.log('user found');
    //    }
    //  },function(err)
    //  {
    //      console.log("Error occured.");
    //  });
    });
}));
}