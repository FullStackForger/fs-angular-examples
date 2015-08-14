(function () {
	var articleBox = angular.module('articleBox', []);

	articleBox.directive('articleBox', function() {
		return {
			transclude: true,
			templateUrl: './09-07-article-box/09-07-article.tpl.html',
			scope: {
				title: '='
			}
		}
	});
})();



