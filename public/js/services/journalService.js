//Posts will have User reference
//Journal route --> go to server ---> check current user ---> go to database and get posts referencing that user

var app = angular.module("Journal");

app.service("journalService", function($http, $q, $location, $sce){

	this.createPost = function(post){
		var deferred = $q.defer();
		$http ({
			method: "POST",
			url: "/api/posts",
			data: {title: post}
		}).then(function(response){
			deferred.resolve(response);
		})
		return deferred.promise;
	}


	this.logout = function(){
		console.log("service");
		var deferred = $q.defer();
		$http ({
			method: "GET",
			url: "/api/logout"
		}).then(function(response){
			$location.path("/").replace();
			deferred.resolve(response);
		})
	}
	var entries;


	this.retrieve = function(posts){
		var deferred = $q.defer();
		$http ({
			method: "GET",
			url: "/api/posts"
		}).then(function(response){
			for(var i = 0; i < response.data.length; i++){
				response.data[i].title = $sce.trustAsHtml(response.data[i].title)
			}
			entries = response.data;
			console.log(entries);
			$location.path("/journal/history");
			deferred.resolve(response)
		})
		// moment().format('MMMM Do YYYY, h:mm:ss a');
		return deferred.promise;
	}

	this.fetchPosts = function(){
		return entries;
	}

})