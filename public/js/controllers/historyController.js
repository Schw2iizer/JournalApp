var app = angular.module("Journal");

app.controller("historyController", function($scope, journalService){
	$scope.postHistory = journalService.fetchPosts();
		// console.log($scope.postHistory);
	$scope.history = "hello world";
})