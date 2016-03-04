(function () {
	"use strict";

	angular
		.module('unit_07_03_Controllers', ['unit_07_03_Store'])
		.controller('MainController', MainController)
		.controller('ParamPageController', ParamPageController)
		.controller('HistoryController', HistoryController);

	function MainController() {
		this.title = 'Main Page';
	}

	function ParamPageController($routeParams) {
		this.$inject = ['$routeParam']
		this.title = 'Param Page';
		this.pageId = $routeParams.pageId;
	}

	function HistoryController($rootScope, historyStore) {
		this.$inject = ['$rootScope', 'historyStore'];
		this.label = "Route History";

		var self = this;
		$rootScope.$on('routeRegistered', function () {
			self.data = historyStore.getHistory();
		})
	}
})()
