'use strict';

angular.module('TicTacToeApp', [
  'TicTacToeApp.controllers',
]);

'use strict';



angular.module('TicTacToeApp.controllers', []).controller('gameCtrl', ['$scope', function($scope) {
  $scope.createBoard = function(size, symbol) {
    // create a tic tac toe board using the argument size for width and height
    // if size is not set, use a 3 by 3 board
    // standard symbol is a smiley
    if (size == null) {
      size = 3;
    }
    if (symbol == null) {
      symbol = '☺';
    }
    $scope.board = [];
    for(var i = 0; i < size; ++i) {
      var temp = [];
      for(var j = 0; j < size; ++j) {
        temp.push(symbol); // set field to passed in symbol
      }
      $scope.board.push(temp);
    }
    console.log($scope.board);
    $scope.boardcreated = true;
  };
  $scope.playcounter = 0;

  $scope.tellmeaboutyou = function(p, i) {
    alert('I am at row ' + p + ', column ' + i + 'and my value is: ' + $scope.board[p][i]);
  }

  $scope.takefield = function(x, y) {
    var symbol = "X";
    if ($scope.playcounter % 2 == 0 ) {
    	symbol = "X"
    } else {
    	symbol = "O"
    }
    $scope.board[x][y] = symbol,
    $scope.playcounter += 1;
  }
}]);


//make play counter
//