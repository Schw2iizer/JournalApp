var app = angular.module("Journal");


app.controller("authController", function($scope, authService){
	// $scope.clickToRegister = function(){
	// 	authService.register($scope.email, $scope.password)
	// 		.then(function(){
	// 			swal("You successfully registered!", "Thanks!", "success")
	// 		}, function(err){
	// 			swal("Oops...", "Something went wrong!", "error");
	// 		})
	// 	$scope.email = "";
	// 	$scope.password = "";
	// }

	$scope.clickToLogin = function(){
		authService.login($scope.email, $scope.password);
	}

})