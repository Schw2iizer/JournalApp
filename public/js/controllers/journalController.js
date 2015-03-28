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

	$scope.map = {
            center: {
                latitude: 38.68551,
                longitude: -96.50391
            },
            draggable: true,
            zoom: 4
        };
        // map options
        options = {
            scrollwheel: false,
            panControl: true,
            rotateControl: true,
            scaleControl: false,
            streetViewControl: true,
            zoomControl: true,
            zoomControlOptions: {
                style: "DEFAULT"
            }
        };

        // map marker
        $scope.marker = {
            id: 0,
            coords: {
                latitude:  38.68551,
                longitude: -96.50391
            },
            options: {
                draggable: false,
                animation: 1 // 1: BOUNCE, 2: DROP
            }
        };

})