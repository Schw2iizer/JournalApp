var app = angular.module("Journal");

app.controller("historyController", function($scope, journalService, $filter){
	$scope.postHistory = journalService.fetchPosts();
	$scope.history = [{
		// "date": "date",
		"title": "title"
	}];

	// $scope.date = $filter('date')(new Date(), 'fullDate');
})