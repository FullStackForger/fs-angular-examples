angular
	.module('unit_07_01_Controllers', [])
	.controller('MainController', ['$scope', function ($scope) {
		$scope.title = 'Main Page';
	}])
	.controller('DetailsController', ['$scope', function($scope) {
		$scope.title = 'Detail Page';
	}]);