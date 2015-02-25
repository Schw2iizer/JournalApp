var app = angular.module("Journal");

app.service("profileService", function($http, $q){
	this.getProfile = function(){
		var deferred = $q.defer();
		$http ({
			method: "GET",
			url: "/api/profile"
		}).then(function(response){
			deferred.resolve(response.data);
		})
		return deferred.promise;
	}





})