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
  {status: "A", idNum:0 }, 
  {status: "B", idNum:1 }, 
  {status: "C", idNum:2 }, 
  {status: "D", idNum:3 }, 
  {status: "E", idNum:4 }, 
  {status: "F", idNum:5 }, 
  {status: "G", idNum:6 }, 
  {status: "H", idNum:7 }, 
  {status: "I", idNum:8 }
  ]  ;

};
$scope.player1 = [];
$scope.player2 = [];

$scope.playcounter = 0;

  $scope.playerPicks = function(thisCell) {
    if ($scope.playcounter % 2 == 0){
      thisCell.status = "X" ;
      $scope.player1.push(thisCell.idNum);
      $scope.winScenario(thisCell.idNum);

    } else {
      thisCell.status = "O";
      $scope.player2.push(thisCell.idNum);
      $scope.winScenario(thisCell.idNum);
    }
      $scope.playcounter += 1;
      console.log(thisCell.idNum);
    
  } ;




$scope.winScenario = function(playerId) {
    if(playerId == 5){
      if($scope.playcounter %2 ==0){
        console.log("X WINS")
      }else {
        console.log("O Wins")
      }
      console.log("WINNER");
    }
  }
  

window.onload = $scope.createBoard(3);
  
}]);
