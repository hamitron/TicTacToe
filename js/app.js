var TTAPP = angular.module('TicTacToeApp', ['firebase']);

TTAPP.controller('gameCtrl', function($scope, $firebase) {


$scope.testBoard = [
                    [" "," "," "],
                    [" "," "," "],
                    [" "," "," "]
];

$scope.createBoard = function(size) {
    // create a tic tac toe board using the argument size for width and height
    // if size is not set, use a 3 by 3 board
  if (size == null) {
      size = 3;
    }

 $scope.boardArray = [
  {status: "A", idNum:0, idx:0, idy: 0, chosen: false}, 
  {status: "B", idNum:1, idx:1, idy: 0, chosen: false}, 
  {status: "C", idNum:2, idx:2, idy: 0, chosen: false}, 
  {status: "D", idNum:3, idx:0, idy: 1, chosen: false}, 
  {status: "E", idNum:4, idx:1, idy: 1, chosen: false}, 
  {status: "F", idNum:5, idx:2, idy: 1, chosen: false}, 
  {status: "G", idNum:6, idx:0, idy: 2, chosen: false}, 
  {status: "H", idNum:7, idx:1, idy: 2, chosen: false}, 
  {status: "I", idNum:8, idx:2, idy: 2, chosen: false}
  ];
};

  //These arrays hold the values of chosen cells
  //counts up after every space choice. except choices that are already occupied
  $scope.playcounter = 0;

$scope.whosTurn = function(){
  if ($scope.playcounter % 2 == 0){
    $scope.oTurn = true;
  } else {
        $scope.oTurn = false;
  }
//hides player turn container.  will replace with winning player.
   if ($scope.playcounter < 8){
      $scope.gameEnd = false;
    } else {
      $scope.gameEnd = true;
    }
    
};

$scope.addNames = function(xName, yName){
  $scope.playerXName = xName;
  $scope.playerOName = yName;
  $scope.xyName = true; // this binds with nghide to hide the name box.
};


  $scope.playerPicks = function(thisCell) {
   // determines if space has already been chosen or not.  If chosen it adds 0 to the playcounter.
    $scope.whosTurn();
    if (thisCell.chosen == true){
      console.log("Can't pick that one, " + thisCell.status + " is already there.");

    } else {
      if ($scope.playcounter % 2 == 0){
        thisCell.status = "X" ;
        thisCell.chosen = true;
        $scope.testBoard[thisCell.idx][thisCell.idy] = "X";
        $scope.winScenario(thisCell.idx, thisCell.idy);
        // console.log("X pushed to " + thisCell.idx +" "+ thisCell.idy)
        

      } else {
        thisCell.status = "O";
        thisCell.chosen = true;
        $scope.testBoard[thisCell.idx][thisCell.idy] = "O";
        $scope.winScenario(thisCell.idx, thisCell.idy);
        // console.log("O pushed to " + thisCell.idx +" "+ thisCell.idy)
        
      }
        $scope.playcounter += 1;
    }  
    
  } ;




$scope.winScenario = function(x,y) {
 
 // if ($scope.playcounter >=2){
  var c = 0;
  var r = 0;
  var playerXWins = "XXX";
  var playerOWins = "OOO";

  //checks row one for winner
   if (($scope.testBoard[c][r] + $scope.testBoard[c+1][r] + $scope.testBoard[c+2][r]) == playerXWins ||
      ($scope.testBoard[c][r] + $scope.testBoard[c+1][r] + $scope.testBoard[c+2][r]) == playerOWins)  {
        console.log("we have a winner")
  // checks column one for winner
   } else if (($scope.testBoard[c][r] + $scope.testBoard[c][r+1] + $scope.testBoard[c][r+2]) == playerXWins ||
              ($scope.testBoard[c][r] + $scope.testBoard[c][r+1] + $scope.testBoard[c][r+2]) == playerOWins){
                console.log("Veritcal winner"); 
  } else if (($scope.testBoard[c][r] + $scope.testBoard[c+1][r+1] + $scope.testBoard[c+2][r+2]) == playerXWins ||
              ($scope.testBoard[c][r] + $scope.testBoard[c+1][r+1] + $scope.testBoard[c+2][r+2]) == playerOWins){ 
                console.log("Diag Win");
  } else if ($scope.playcounter == 8) {
                console.log("Cat's Game");
  }
}
// }







window.onload = $scope.createBoard(3);
  
});
