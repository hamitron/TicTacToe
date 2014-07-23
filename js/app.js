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
  {status: "A", idNum:0, chosen: false}, 
  {status: "B", idNum:1, chosen: false}, 
  {status: "C", idNum:2, chosen: false}, 
  {status: "D", idNum:3, chosen: false}, 
  {status: "E", idNum:4, chosen: false}, 
  {status: "F", idNum:5, chosen: false}, 
  {status: "G", idNum:6, chosen: false}, 
  {status: "H", idNum:7, chosen: false}, 
  {status: "I", idNum:8, chosen: false}
  ];

};
$scope.player1 = new Array;
$scope.player2 = new Array;

$scope.playcounter = 0;

  $scope.playerPicks = function(thisCell) {
   // determines if space has already been chosen or not.  If chosen it adds 0 to the playcounter.
    if (thisCell.chosen == true){
      $scope.playcounter +=0;
      
    } else {
      if ($scope.playcounter % 2 == 0){
        thisCell.status = "X" ;
        thisCell.chosen = true;
        $scope.player1.push(thisCell.idNum);
        $scope.winScenario(thisCell.idNum);

      } else {
        thisCell.status = "O";
        thisCell.chosen = true;
        $scope.player2.push(thisCell.idNum);
        $scope.winScenario(thisCell.idNum);
      }
        $scope.playcounter += 1;
        console.log(thisCell.idNum);
    }  
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
