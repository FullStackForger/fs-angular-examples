angular
	.module('unit_07_02_App', [
		'ngRoute',
		'unit_07_02_Controllers'
	])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'partials/main-page.html',
				controller: 'MainController'
			})
			.when('/details', {
				templateUrl: 'partials/details-page.html',
				controller: 'DetailsController',
				// we will use controllerAs
				// to make its properties available via detailsCtrl object
				controllerAs: 'detailsCtrl'
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
