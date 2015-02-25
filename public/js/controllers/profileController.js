var app = angular.module("Journal");


app.controller("profileController", function($scope, profile){
	$scope.profile = profile;
})