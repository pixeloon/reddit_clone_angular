var app = angular.module('reddit-clone', []);


app.controller('MainController', function($scope, $filter) {
    window.scope = $scope
    $scope.view = {};
    $scope.view.posts = [];
    $scope.view.showAddPostForm = false;
    $scope.view.inputImageUrl = "http://lorempixel.com/200/200/";
    $scope.view.sorting = "Votes";
    $scope.view.search = "";
    $scope.view.showCommentForm = false;
    $scope.view.posts.comments = [];
    $scope.view.showComments = false;
    $scope.view.postCounter = 0;

    $scope.submitPost = function() {
        $scope.view.posts.push({
            postId: $scope.view.postCounter,
            title: $scope.view.inputTitle,
            author: $scope.view.inputAuthor,
            imageUrl: $scope.view.inputImageUrl,
            description: $scope.view.inputDescription,
            votes: 0,
            timestamp: Date.now(),
            comments: [],
            showCommentForm: false,
        });
        $scope.view.showAddPostForm = false;
        $scope.view.postCounter = $scope.view.postCounter + 1;
        $scope.clearForm();
    }

    $scope.clearForm = function() {
        $scope.view.inputTitle = "Title ";
        $scope.view.inputAuthor = "Gunther";
        $scope.view.inputImageUrl = "http://lorempixel.com/200/200/";
        $scope.view.inputDescription = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    }

    $scope.orderPosts = function() {
        if ($scope.view.sorting === "Votes") {
            return "-votes"
        } else if ($scope.view.sorting === "Title") {
            return "title"
        } else if ($scope.view.sorting === "Date") {
            return "timestamp"
        }
    }

    $scope.submitComment = function(post,comment) {
        $scope.view.posts[post.postId].comments.push(comment);
        post.showComments = true;
        post.showCommentForm = false;
        post.comment = {}

    }


})
