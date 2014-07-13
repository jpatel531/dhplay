var app = angular.module('preview', []);

app.controller('PreviewController', function($scope){

	$scope.workSelection = [
		{
			title: "Chillies",
			description: "This is a short description of the art-work for the profile preview.",
			recommendations: 49,
			additionalInformation: "Commissioned",
			commissionedOrFeatured: true,
			image: "./public/chillies.jpg"
		},
		{
			title: "Magic",
			description: "This is a short description of the art-work for the profile preview.",
			recommendations: 193,
			additionalInformation: "Commissioned",
			commissionedOrFeatured: true,
			image: "./public/room.jpg",
		},
		{
			title: "New York",
			description: "This is a short description of the art-work for the profile preview.",
			recommendations: 121,
			additionalInformation: "Featured in Notes",
			commissionedOrFeatured: true,
			image: "./public/street.jpg"
		}

	];

	$scope.pickSelection = [
	{
		title: "Poetry in Cambridge",
		description: "This is a short description of the anthology for the profile preview",
		additionalInformation: "Anthology",
		anthology: true,
		recommendations: 29,
		image: "http://upload.wikimedia.org/wikipedia/commons/f/fd/KingsCollegeChapel.jpg"
	},
	{
		title: "This Should Be So",
		description: "This is a short description of the art-work for the profile preview",
		additionalInformation: "By Matthew Neal",
		singleAuthor: true,
		recommendations: 362,
		image: "./public/matt.jpg"
	},
	{
		title: "Matisse and his Birds",
		description: "This is a short description of the art-work for the profile preview",
		additionalInformation: "By Jemima Moore",
		singleAuthor: true,
		recommendations: 91,
		image: "./public/matisse.jpg"
	}

	];

	$scope.storySelection = [
		{
			title: "Lorem Ipsum",
			description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			recommendations: 22
		},
		{
			title: "Lorem Ipsum",
			description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			recommendations: 22
		},
		{
			title: "Lorem Ipsum",
			description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			recommendations: 22

		}

	];

	this.selection = $scope.workSelection;


});