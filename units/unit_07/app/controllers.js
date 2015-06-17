angular
	.module('unit07Controllers', [])
	.controller('MainController', ['$scope', '$http',
		function ($scope, $http) {
			$scope.title = 'Main Page';
		}])
	.controller('DetailsController', ['$scope', '$routeParams',
		function($scope, $routeParams) {
			//$scope.templateNo = $routeParams.templateNo;
			$scope.title = 'Detail Page';
		}]);