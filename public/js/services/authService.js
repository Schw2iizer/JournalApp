var app = angular.module("Journal");

app.service("authService", function($http, $q, $location){
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

	this.login = function(email, password){
		var deferred = $q.defer();
		$http ({
			method: "POST",
			url: "/api/login",
			data: {
				email: email,
				password: password
			}
		}).then(function(response){
			$location.path("/journal").replace();
			deferred.resolve(response);
		}, function(err){
			console.log(err);
		})
	return deferred.promise;
	}

	

})