var app = angular.module("Journal");

app.controller("historyController", function($scope, journalService){
	$scope.postHistory = journalService.fetchPosts();
	$scope.history = "hello world";
})