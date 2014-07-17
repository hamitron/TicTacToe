var TicTac = angular.module('TicTacToeApp', []);

TicTac.controller('TicTacController', function ($scope) {

	$scope.shopName = 'loving fucking coffee';

	$scope.toasty = function(roast){
		if(roast.roastLevel > 5){
			return true;
		} else {
			return false;
		}
	};
	$scope.gameBoard = [
		{1:1},{1:2},{1:3},
		{2:1},{2:2},{2:3},
		{3:1},{3:2},{3:3}
	]


});

