var app = angular.module('profile', []);

app.controller('PreviewController', function($scope){

	var workSelection = [
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
			additionalInformation: "Featured in <a href='#'>Notes</a>",
			image: "./public/street.jpg"
		}

	];

	this.selection = workSelection;


});