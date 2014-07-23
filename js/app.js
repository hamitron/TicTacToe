var TTAPP = angular.module('TicTacToeApp', [
  'TicTacToeApp.controllers',
]);

angular.module('TicTacToeApp.controllers', [])
.controller('gameCtrl', ['$scope', function($scope) {
  

$scope.createBoard = function(size) {
    // create a tic tac toe board using the argument size for width and height
    // if size is not set, use a 3 by 3 board
  if (size == null) {
      size = 3;
    }

 $scope.boardArray = [
  {status: "A"}, 
  {status: "B"}, 
  {status: "C"}, 
  {status: "D"}, 
  {status: "E"}, 
  {status: "F"}, 
  {status: "G"}, 
  {status: "H"}, 
  {status: "I"}
  ]  ;

};

$scope.playcounter = 0;

  $scope.playerPicks = function(thisCell) {
    if ($scope.playcounter % 2 == 0){
      thisCell.status = "X" ;
    } else {
      thisCell.status = "O";
    }
      $scope.playcounter += 1;
  } ;




$scope.winScenario = function() {
    console.log($scope.player1 ? "player1" : "player2");
  }
  

window.onload = $scope.createBoard(3);
  
}]);
