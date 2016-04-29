'use strict';

/* Controllers */
function addUserForWeb ($scope,addUserService){
      $scope.adduserNode=function()
      {
      var user={
            userName:$scope.userName,
            firstName:$scope.firstName,
            lastName:$scope.lastName,
            email:$scope.email,
            phone:$scope.phone,
            mob:$scope.mobile,
            addressline1:$scope.addressline1,
            addressline2:$scope.addressline2,
            city:$scope.city,
            state:$scope.state,
            country:$scope.country,
            pin:$scope.pin,
        };
        addUserService.addUser(user);
      };
      
      $scope.getUser=function()
      {
       $scope.users=addUserService.getUser();
      }
      
      $scope.loginFaceBook=function()
      {
      var facebookUser={
            userName:$scope.userName,
            password:$scope.password,
        };
        addUserService.faceBookLogin(facebookUser);
      };
      
  }
  app.controller('addUserController', addUserForWeb);