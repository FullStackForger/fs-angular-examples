angular
	.module('unit_07_03_Controllers', ['unit_07_03_Store'])
	.controller('MainController', function () {
		this.title = 'Main Page';
	})
	.controller('ParamPageController', function ($routeParams) {
		this.pageId = $routeParams.pageId;
	})
	.controller('HistoryController', function ($rootScope, historyStore) {
		this.$inject = ['$rootScope', 'historyStore'];
		this.label = "Route History";

		var self = this;
		$rootScope.$on('routeRegistered', function () {
			self.data = historyStore.getHistory();
		})
	});