var app = angular.module("Journal");

app.service("registerService", function($http, $q, $location){
	this.register = function(email, password){
	var deferred = $q.defer();
	$http ({
		method: "POST",
		url: "/api/register",
		data: {
			email: email,
			password: password
		}
	}).then(function(response){
		$location.path("/").replace();
		deferred.resolve(response);
	})
	return deferred.promise;
	}
})
