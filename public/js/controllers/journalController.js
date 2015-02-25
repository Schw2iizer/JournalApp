var app = angular.module("Journal");


app.controller("journalController", function($scope, journalService){
	
	$scope.createThatPost = function(){
		journalService.createPost($scope.journalPost);
		$scope.journalPost = "";

	}

	$scope.loggingOut = function(){
		console.log("ctrl");
		journalService.logout();
	}

	$scope.retrievePosts = function(){
		journalService.retrieve($scope.retrievePost)
		.then(function(response){
			$scope.postHistory = response.data;
			console.log($scope.postHistory);
		});
		// $scope.postHistory = "";
	}



})