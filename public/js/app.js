var app = angular.module("Journal", ["ngRoute", "textAngular"]);

app.config(function($routeProvider){
	$routeProvider
		.when("/", {
			templateUrl: "templates/auth.html",
			controller: "authController"
		})
		.when("/profile", {
			templateUrl: "templates/profile.html",
			controller: "profileController",
			resolve: {
				profile: function(profileService) {
					return profileService.getProfile();
				}
			}
		})
		.when("/journal", {
			templateUrl: "templates/journal.html",
			controller: "journalController"
			// resolve: {
			// 	entries: function(journalService){
			// 		return journalService.getEntries();
			// 	}
			// }
		})
		.when("/register", {
			templateUrl: "templates/register.html",
			controller: "registerController"
		})
		.when("/journal/history", {
			templateUrl: "templates/history.html",
			controller: "historyController"
		})
		.otherwise('/');




})
