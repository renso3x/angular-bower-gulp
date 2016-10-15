'use strict';

(function() {

	angular
		.module('booking.controller', [])
		.controller('BookingController', BookingController)

	BookingController.$inject = ['$scope'];
	function BookingController($scope) {
		var vm = this,
			reservedSeats = [],
			transac_id = 0;

		vm.editRow = false;
		vm.user = {};
		vm.user.seats = 0;
		vm.customers = [];
		vm.user.date = vm.reserveDate = '20170106';

		vm.seatsArr = [ 
			{
				'row1': [
					{'date': '20170106', 'name': 'A1', 'reserved': false},
					{'date': '20170206', 'name': 'A2', 'reserved': false},
					{'date': '20170106', 'name': 'A3', 'reserved': false},
					{'date': '20170206', 'name': 'A4', 'reserved': false},
					{'date': '20170106', 'name': 'A5', 'reserved': false},
					{'date': '20170206', 'name': 'A6', 'reserved': false},
				]
			},
			{
				'row2': [
					{'date': '20170106','name': 'B1', 'reserved': false},
					{'date': '20170206','name': 'B2', 'reserved': false},
					{'date': '20170206','name': 'B3', 'reserved': false},
					{'date': '20170206','name': 'B4', 'reserved': false},
					{'date': '20170106','name': 'B5', 'reserved': false},
					{'date': '20170106','name': 'B6', 'reserved': false},
				]
			},
			{
				'row3': [
					{'date': '20170206','name': 'C1', 'reserved': false},
					{'date': '20170106', 'name': 'C2', 'reserved': false},
					{'date': '20170206','name': 'C3', 'reserved': false},
					{'date': '20170106','name': 'C4', 'reserved': false},
					{'date': '20170106','name': 'C5', 'reserved': false},
					{'date': '20170206','name': 'C6', 'reserved': false},
				]
			},
			{
				'row4': [
					{'date': '20170206','name': 'D1', 'reserved': false},
					{'date': '20170206','name': 'D2', 'reserved': false},
					{'date': '20170106','name': 'D3', 'reserved': false},
					{'date': '20170106','name': 'D4', 'reserved': false},
					{'date': '20170106','name': 'D5', 'reserved': false},
					{'date': '20170106','name': 'D6', 'reserved': false},
				]
			},
			{
				'row5': [
					{'date': '20170106','name': 'E1', 'reserved': false},
					{'date': '20170206','name': 'E2', 'reserved': false},
					{'date': '20170106','name': 'E3', 'reserved': false},
					{'date': '20170106','name': 'E4', 'reserved': false},
					{'date': '20170106','name': 'E5', 'reserved': false},
					{'date': '20170106','name': 'E6', 'reserved': false},
				]
			}
		]

		vm.selectedDate = function() {
			vm.user.date = vm.reserveDate;
		}

		vm.occupySeat = function(parentIndex, row, seatsPos, seat, index) {
			seat.reserved = true;

			var index = reservedSeats.indexOf(seat);
			if (index < 0) {
				reservedSeats.push(seat);
			} else {
				seat.reserved = false;
				reservedSeats.splice(index, 1);
			}
			vm.user.seats = reservedSeats;
			console.log(reservedSeats);
		}

		vm.submitReservation = function() {
			vm.user.transac_id = '000'+ transac_id++;
			vm.user.status = 'Reserved';
			occupySeats(vm.user.seats);
			vm.customers.push(vm.user);
			vm.user = {};
			vm.user.date = vm.reserveDate;
			reservedSeats = [];
		}

		vm.updateInfo = function(index, status) {
			switch(status) {
				case 'Cancelled': 
					vacantSeats(vm.customers[index].seats);
					vm.customers.splice(vm.customers.indexOf(index), 1);
					break;
				case 'Paid':
					console.log('no longer editable');
					vm.customers[index].paid = true;
					vm.customers[index].status = status;	
					vm.customers[index].edit = false;			
					break;
				default: 
					vm.customers[index].edit = false;			
			}
		}

		vm.cancelUpdate = function(index, status) {
			vm.customers[index].status = status;
			vm.customers[index].edit = false;			
		}

		function occupySeats(userSeats) {
			angular.forEach(userSeats, function(val) {
				val.reserved = 'occuped'
			});
		}

		function vacantSeats(userSeats) {
			console.log(userSeats);
			angular.forEach(userSeats, function(val) {
				val.reserved = false;
			});
		}
	}

})();