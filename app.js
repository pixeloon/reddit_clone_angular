
var app = angular.module('reddit-clone', []);


app.controller('MainController', function($scope){
  $scope.view = {};
  $scope.view.posts = {};
  $scope.view.showAddPostForm === false;


  $scope.submitPost = function(){
    $scope.view.post
  }


})