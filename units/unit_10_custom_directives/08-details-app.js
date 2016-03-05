(function () {
	angular
		.module('detailsApp', [])
		.controller('PersonController', PersonController)
		.directive('detailsInfo', detailsInfo);

	function PersonController($scope) {

		this.$inject = ['$scope']
		var self = this;
		// we are hiding direct access to people array
		var people = [
			{ name: 'John Smith', title: 'Developer'},
			{ name: 'Tom Black', title: 'Designer'},
			{ name: 'Peter Wise', title: 'MD'},
			{ name: 'Anna Thomson', title: 'Senior Developer'},
			{ name: 'Joan White', title: 'PM'},
		];

		self.getArray = function (limit) {
			if (limit && limit <= people.length)
				return limit > 0 ? people.slice(0, limit) : people.slice(limit);
			return people;
		};

		self.count = function() {
			return people.length;
		};

	}

	function detailsInfo() {
		return {
			restrict: 'E',
			templateUrl: '08-details-info.tpl.html',
			scope: {
				getTotal: '&',
				getData: '&'
			}
		};
	}
})()