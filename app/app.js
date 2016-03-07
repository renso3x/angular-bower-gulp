(function() {
	'use strict';

	var app = angular.module("SampleApp", [
		"ui.router",
	]).config(function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise("homepage");

		$stateProvider
			.state("homepage", {
				url: "/homepage",
				templateUrl: "app/views/homepage.html"
			})
			.state("dashboard", {
				url: "/dashboard",
				templateUrl: "app/views/dashboard.html"
			});
	});
})();