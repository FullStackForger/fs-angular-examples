angular
	.module('unit_07_03_App', [
		'ngRoute',
		'unit_07_03_Controllers',
		'unit_07_03_Store'
	])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'partials/main-page.html',
				controller: 'MainController'
			})
			.when('/page/:pageId', {
				templateUrl: 'partials/param-page.html',
				controller: 'ParamPageController',
				controllerAs: 'paramPageCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});
	}]);
