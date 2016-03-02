(function() {
	'use strict';

	var app = angular.module("SampleApp", [
		"ui.router",
	]).config(function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise("one");

		$stateProvider
			.state("one", {
				url: "/one",
				templateUrl: "partials/partials1.html"
			})
			.state("two", {
				url: "/two",
				templateUrl: "partials/partials2.html"
			});
	});
})();