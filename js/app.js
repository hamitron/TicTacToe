var TicTac = angular.module('TicTacToeApp', []);

TicTac.controller('TicTacController', function ($scope) {

	$scope.boardName = 'tic tac fucking toe';

	
	$scope.gameBoard = [
		{	row: 1,
			column: 1,
			uniqueId: "detroit"
			},
		{	row: 1,
			column: 2
		},
		{	row: 1,
			column: 3
		},
		{	row: 2,
			column: 1
		},
		{	row: 2,
			column: 2
		},
		{	row: 2,
			column: 3
		},
		{	row: 3,
			column: 1
		},
		{	row: 3,
			column: 2
		},
		{	row: 3,
			column: 3
		}
	]


});

