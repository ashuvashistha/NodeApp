var db = require('../controller/Connection');
var assert = require('assert');
var deferred = require('deferred');
var user= new Object();

user.addUser = function(req)
{
    var requestObject= req.body;
    db(function (err,db)
    {
        collection = db.collection('users');
        collection.insert(
            {
                userName:requestObject.userName,
                firstName:requestObject.firstName,
                lastName:requestObject.lastName,
                email:requestObject.email,
                phone:requestObject.phone,
                mob:requestObject.mobile,
                addressline1:requestObject.addressline1,
                addressline2:requestObject.addressline2,
                city:requestObject.city,
                state:requestObject.state,
                country:requestObject.country,
                pin:requestObject.pin,
            });
       });
}

user.getUser = function()
{   
     var users = null;
    
    var def = deferred();
    db(function (err,db)
    {
      collection = db.collection('users');
      var cursor = collection.find();
      cursor.each(function (err, doc)
      { 
        def.resolve(doc);
      });
      
     }); 
        
      return def.promise;      
}

user.getUserCallback = function(callback)
{       
    db(function (err,db)
    {   
       // db.open();    
      collection = db.collection('users');
      var cursor = collection.find(function(err,doc)
          {
            doc.each(function (err, users)
            { 
                if(err)
                {
                    callback(err);
                }
                else
                {                    
                    callback(err,users);
                }
            }); 
          });  
          
          db.close   
     }); 
     
             
}
module.exports= user;