(function () {
	var articleBox = angular.module('articleBox', []);

	articleBox.directive('articleBox', function() {
		return {
			transclude: true,
			templateUrl: './07-article-box.tpl.html',
			scope: {
				title: '='
			}
		}
	});
})();



