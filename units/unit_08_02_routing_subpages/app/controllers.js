angular
	.module('unit_07_02_Controllers', [])
	.controller('MainController', function () {
		this.title = 'Main Page';
	})
	.controller('DetailsController', function ($http) {
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
	})
	.controller('ParamPageController', function ($routeParams) {
		this.pageId = $routeParams.pageId;
	});