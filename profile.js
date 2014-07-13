var app = angular.module('profile', []);

app.controller('PreviewController', function($scope){

	$scope.workSelection = [
		{
			title: "Chillies",
			description: "This is a short description of the art-work for the profile preview.",
			recommendations: 49,
			additionalInformation: "Commissioned",
			image: "./public/chillies.jpg"
		},
		{
			title: "Magic",
			description: "This is a short description of the art-work for the profile preview.",
			recommendations: 193,
			additionalInformation: "Commissioned",
			image: "./public/room.jpg",
		},
		{
			title: "New York",
			description: "This is a short description of the art-work for the profile preview.",
			recommendations: 121,
			additionalInformation: "Featured in Notes",
			image: "./public/street.jpg"
		}

	];

	$scope.pickSelection = [
	{
		title: "Poetry in Cambridge",
		description: "This is a short description of the anthology for the profile preview",
		additionalInformation: "Anthology",
		image: ""
	},
	{
		title: "This Should Be So",
		description: "This is a short description of the art-work for the profile preview",
		additionalInformation: "By Matthew Neal",
		image: ""
	},
	{
		title: "Matisse and his Birds",
		description: "This is a short description of the art-work for the profile preview",
		additionalInformation: "By Jemima Moore",
		image: ""
	}


	];

	this.selection = $scope.workSelection;



});