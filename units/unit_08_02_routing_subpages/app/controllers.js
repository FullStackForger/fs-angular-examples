angular
	.module('unit_07_02_Controllers', [])
	.controller('MainController', MainController)
	.controller('DetailsController', DetailsController)
	.controller('ParamPageController', ParamPageController);

function MainController($scope) {
	$scope.title = 'Main Page';
}

function DetailsController($http) {
	var self = this;

	self.$inject = ['$http'];
	self.title = 'Detail Page';

	$http
		.get('api/films.json')
		.then(onComplete)
		.catch(onError);

	function onComplete( response ) {
		self.films = response.data;
	}

	function onError () {
		self.error = "Error occurred! Sorry for inconvenience";
	}
}

function ParamPageController ($routeParams) {
	this.$inject = ['$routeParams'];
	this.title = 'Param Page Title';
	this.pageId = $routeParams.pageId;
}