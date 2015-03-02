var app = angular.module("Journal");

app.controller("registerController", function(registerService, $scope){
		$scope.clickToRegister = function(){
		registerService.register($scope.email, $scope.password)
			.then(function(){
				swal("You successfully registered!", "Thanks!", "success")
			}, function(err){
				swal("Oops...", "Something went wrong!", "error");
			})
		$scope.email = "";
		$scope.password = "";
	}
})