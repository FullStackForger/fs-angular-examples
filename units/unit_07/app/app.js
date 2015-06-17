angular
	.module('unit07App', [
		'ngRoute',
		'unit07Controllers'
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
