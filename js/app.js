var TTAPP = angular.module('TicTacToeApp', ['firebase']);

TTAPP.controller('gameCtrl', function($scope, $firebase) {


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

  //These arrays hold the values of chosen cells
  $scope.player1Array = new Array;
  $scope.player2Array = new Array;
  //counts up after every space choice. except choices that are already occupied
  $scope.playcounter = 0;

$scope.whosTurn = function(){
  // $scope.xTurn = false; // x always starts
  // $scope.oTurn = false; // o is false, binding two divs with this.
  if ($scope.playcounter % 2 == 0){
    $scope.xTurn = false;
    $scope.oTurn = true;
  } else {
        $scope.oTurn = false;
        $scope.xTurn = true;
  }
  console.log("x: "+ $scope.xTurn) ; 
};

$scope.addNames = function(xName, yName){
  console.log(xName, yName);
  $scope.playerXName = xName;
  $scope.playerOName = yName;
  $scope.xyName = true; // this binds with nghide to hide the name box.
};


  $scope.playerPicks = function(thisCell) {
   // determines if space has already been chosen or not.  If chosen it adds 0 to the playcounter.
    if (thisCell.chosen == true){
      $scope.playcounter +=0;

    } else {
      if ($scope.playcounter % 2 == 0){
        thisCell.status = "X" ;
        thisCell.chosen = true;
        $scope.player1Array.push(thisCell.idNum);
        $scope.winScenario(thisCell.idNum);

      } else {
        thisCell.status = "O";
        thisCell.chosen = true;
        $scope.player2Array.push(thisCell.idNum);
        $scope.winScenario(thisCell.idNum);
      }
        $scope.playcounter += 1;
        console.log(thisCell.idNum);
    }  
    $scope.whosTurn();
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
  
});
