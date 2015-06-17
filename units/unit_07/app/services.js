angular
	.module('unit07Controllers', [])
	.factory('films', ['$http',
		function ($http) {
			$scope.title = 'Main Page';
		}])
	.controller('DetailsController', ['$scope', '$routeParams',
		function($scope, $routeParams) {

			$scope.title = 'Detail Page';

			$http
				.get('/units/unit_07/api/films.json')
				.success(function(data) {
					$scope.phones = data;
				});

			$scope.orderProp = 'age';
		}]);