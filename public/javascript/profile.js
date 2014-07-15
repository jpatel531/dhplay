var app = angular.module('profile-page', []);

app.controller('ProfileController', ['$scope', '$http', function($scope, $http){

	var $this = this;

	$scope.firstThree = function(selection){
		return selection.slice(0,3)
	};

	$http.get('./javascript/laurie.json').success(function(data){
		$scope.workSelection = data.workSelection;
		$scope.pickSelection = data.pickSelection;
		$scope.storySelection = data.storySelection;
		$this.selection = $scope.firstThree($scope.workSelection);
	});

	$scope.portfolioSelection = 0;

	$scope.togglePortfolio = function(e){
		if ((angular.element("div.portfolio.active").length > 0)) {
			if (e.keyCode === 40) {
				e.preventDefault();
				if ($scope.portfolioSelection < $scope.workSelection.length - 1) {
					$scope.portfolioSelection += 1
				}
				else {
					return;
				}
			}
			else if (e.keyCode === 38) {
				e.preventDefault();
				if ($scope.portfolioSelection > 0) {
					$scope.portfolioSelection -= 1
				}	
				else {
					return;
				}		
			}
		}
	};




}]);