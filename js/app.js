var TicTac = angular.module('TicTacToeApp', []);

TicTac.controller('TicTacController', function ($scope) {

	$scope.boardName = 'tic tac fucking toe';


	
	$scope.gameBoard = [
		{	row: 1,
			column: 1,
			uniqueId: "detroit"
		},
		{	row: 1,
			column: 2,
			uniqueId: "whiskey"
		},
		{	row: 1,
			column: 3,
			uniqueId: "tango"
		},
		{	row: 2,
			column: 1,
			uniqueId: "bravo"
		},
		{	row: 2,
			column: 2,
			uniqueId: "kilo"
		},
		{	row: 2,
			column: 3,
			uniqueId: "victor"
		},
		{	row: 3,
			column: 1,
			uniqueId: "lima"
		},
		{	row: 3,
			column: 2,
			uniqueId: "charlie"
		},
		{	row: 3,
			column: 3,
			uniqueId:"xray"
		}
	]


});

