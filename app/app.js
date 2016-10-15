(function() {
	'use strict';

	angular.module("SampleApp", [
		"ui.router",
		"ui.bootstrap",
		"booking.controller"
	]).config(function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise("/");

		var app = {
			url: "/",
			templateUrl: 'app/components/booking/booking.html',
			controller: 'BookingController',
			controllerAs: 'vm'
		}

		$stateProvider
			.state('app', app)
	})

})();