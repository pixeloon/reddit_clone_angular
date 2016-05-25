
var app = angular.module('reddit-clone', []);


app.controller('MainController', function($scope){
  window.scope = $scope
  $scope.view = {};
  $scope.view.posts = [];
  $scope.view.showAddPostForm = false;


  $scope.submitPost = function(){
    $scope.view.posts.push({"title": $scope.view.inputTitle, "author": $scope.view.inputAuthor, "imageUrl": $scope.view.inputImageUrl, "description": $scope.view.inputDescription})
    console.log("POSTS: ", $scope.view.posts);
    $scope.view.showAddPostForm = false;
    $scope.clearForm();
  }

  $scope.clearForm = function(){
    $scope.view.inputTitle = "";
    $scope.view.inputAuthor  = "";
    $scope.view.inputImageUrl  = "";
    $scope.view.inputDescription = "";
  }


})