var FacebookStrategy = require('passport-facebook').Strategy;
//var User = require('/models/user');
var fbConfig = require('fb.js');

var db = require('Connection');
var assert = require('assert');
var deferred = require('deferred');

module.exports = function(passport) {

    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
       db(function (err,db)
    {
      collection = db.collection('users');
      var user = collection.findOne({'userName' : profile.id })
       def.resolve(user);
       var user;
        def.promise().then(function(data)
       {
       user= data;
       })
       return user;
    });
        
    });

passport.use('facebook', new FacebookStrategy({
  clientID        : fbConfig.appID,
  clientSecret    : fbConfig.appSecret,
  callbackURL     : fbConfig.callbackUrl
},
 
  // facebook will send back the tokens and profile
  function(access_token, refresh_token, profile, done) {
    // asynchronous
    process.nextTick(function() {
     
      db(function (err,db)
    {
      collection = db.collection('users');
      var user = collection.findOne({'userName' : profile.id })
       def.resolve(user);
       def.promise.then(function(data)
       {
         console.log('user found')
         return data;
       }, function(err)
       {
        collection.insert(
            {
                userName:profile.id,
                firstName: profile.name.givenName,
                lastName:profile.name.familyName,
                email:profile.emails[0].value,
            });
       });
       });
    });
}));
}