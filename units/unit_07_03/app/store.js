// notes:
// - naming conventions: call it model or not?
// - should the controller be registered here or not?
angular
	.module('unit_07_03_Store', [])
	.service('historyStore', function DataStore () {
		var history = [];

		this.name = "History Store";

		this.saveRoute = function (route) {
			history.unshift(route);
		};

		this.getHistory = function () {
			return angular.copy(history);
		};

	})
	.controller('HistoryRegistrationController', function HistoryRegistrationController (
		$rootScope,
		$route,
		$location,
		historyStore) {

		this.$inject = ['$rootScope', '$route', '$location', 'historyStore'];

		$rootScope.$on('$routeChangeSuccess', function () {
			console.log($location.path());

			historyStore.saveRoute($location.path())
			$rootScope.$emit('routeRegistered');

		});
	});