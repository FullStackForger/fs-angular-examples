angular
	.module('unit_07_01_App', [
		'ngRoute',
		'unit_07_01_Controllers'
	])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.
			when('/', {
				templateUrl: 'partials/main-page.html',
				controller: 'MainController'
			}).
			when('/details', {
				templateUrl: 'partials/details-page.html',
				controller: 'DetailsController'
			}).
			otherwise({
				redirectTo: '/'
			});
	}]);
