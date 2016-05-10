'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', '0.1');



app.service('addUserService',function($resource,$q){
    return{
  addUser:function(user){
   var deferred = $q.defer();
      var resource = $resource('/users/adduser');
   resource.save(user,
   function(response){
     deferred.resolve(response);
    },
   function(response){
     deferred.reject(response);
    }
   );
   return deferred.promise;
  },
  getUser:function()
  {
    var deferred = $q.defer();
      var resource = $resource('/users/getUser');
   resource.get(
   function(response){
     deferred.resolve(response);
    },
   function(response){
     deferred.reject(response);
    }
   );
   return deferred.promise;
  },
    
  faceBookLogin:function(user)
  {
    var deferred = $q.defer();
      var resource = $resource('/users/login');   
    resource.save(user,
   function(response){
     deferred.resolve(response);
    },
   function(response){
     deferred.reject(response);
    }
   );
   return deferred.promise;
  }
  }
});