// Board prototype :

function Board(squareOne, squareTwo, squareThree, squareFour, squareFive, squareSix, squareSeven, squareEight, squareNine) {
  this.squareOne = squareOne;
  this.squareTwo = squareTwo;
  this.squareThree = squareThree;
  this.squareFour = squareFour;
  this.squareFive  = squareFive;
  this.squareSix = squareSix;
  this.squareSeven = squareSeven;
  this.squareEight = squareEight;
  this.squareNine = squareNine;
}

Board.prototype.winner = function() {
  return "PlayerX";
}


// PlayerX prototype :

function PlayerX(playerName, playerColor) {
  this.playerName = playerName;
  this.playerColor = playerColor;
}


// PlayerO prototype :

function PlayerO(playerName, playerColor) {
  this.playerName = playerName;
  this.playerColor = playerColor;
}
