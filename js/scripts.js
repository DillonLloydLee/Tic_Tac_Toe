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
  if ((this.squareOne == this.squareTwo & this.squareTwo == this.squareThree &
    this.squareOne != " ") ||
    (this.squareFour == this.squareFive & this.squareFive == this.squareSix &
      this.squareFour != " ") ||
    (this.squareSeven == this.squareEight & this.squareEight == this.squareNine &
      this.squareSeven != " ") ||
    (this.squareOne == this.squareFour & this.squareFour == this.squareSeven &
      this.squareOne != " ") ||
    (this.squareTwo == this.squareFive & this.squareFive == this.squareEight &
      this.squareTwo != " ") ||
    (this.squareThree == this.squareSix & this.squareSix == this.squareNine &
      this.squareThree != " ") ||
    (this.squareThree == this.squareFive & this.squareFive == this.squareSeven &
      this.squareThree != " ") ||
    (this.squareOne == this.squareFive & this.squareFive == this.squareNine &
      this.squareOne != " ")) {
    return "winner";
  } else if (this.squareOne != " " & this.squareTwo != " "
    & this.squareThree != " " & this.squareFour != " "
    & this.squareFive != " " & this.squareSix != " "
    & this.squareSeven != " " & this.squareEight != " "
    & this.squareNine != " ") {
    return "cat's game";
  } else {
    return "no winner";
  }
}

Board.prototype.placeX = function(clickedSquareNumber) {
  if (clickedSquareNumber == 1) {
    if (this.squareOne == " ") {
      this.squareOne = "X";
    }
  } else if (clickedSquareNumber == 2) {
    if (this.squareTwo == " ") {
      this.squareTwo = "X";
    }
  } else if (clickedSquareNumber == 3) {
    if (this.squareThree == " ") {
      this.squareThree = "X";
    }
  } else if (clickedSquareNumber == 4) {
    if (this.squareFour == " ") {
      this.squareFour = "X";
    }
  } else if (clickedSquareNumber == 5) {
    if (this.squareFive == " ") {
      this.squareFive = "X";
    }
  } else if (clickedSquareNumber == 6) {
    if (this.squareSix == " ") {
      this.squareSix = "X";
    }
  } else if (clickedSquareNumber == 7) {
    if (this.squareSeven == " ") {
      this.squareSeven = "X";
    }
  } else if (clickedSquareNumber == 8) {
    if (this.squareEight == " ") {
      this.squareEight = "X";
    }
  } else if (clickedSquareNumber == 9) {
    if (this.squareNine == " ") {
      this.squareNine = "X";
    }
  }
}

Board.prototype.placeO = function(clickedSquareNumber) {
  if (clickedSquareNumber == 1) {
    if (this.squareOne == " ") {
      this.squareOne = "O";
    }
  } else if (clickedSquareNumber == 2) {
    if (this.squareTwo == " ") {
      this.squareTwo = "O";
    }
  } else if (clickedSquareNumber == 3) {
    if (this.squareThree == " ") {
      this.squareThree = "O";
    }
  } else if (clickedSquareNumber == 4) {
    if (this.squareFour == " ") {
      this.squareFour = "O";
    }
  } else if (clickedSquareNumber == 5) {
    if (this.squareFive == " ") {
      this.squareFive = "O";
    }
  } else if (clickedSquareNumber == 6) {
    if (this.squareSix == " ") {
      this.squareSix = "O";
    }
  } else if (clickedSquareNumber == 7) {
    if (this.squareSeven == " ") {
      this.squareSeven = "O";
    }
  } else if (clickedSquareNumber == 8) {
    if (this.squareEight == " ") {
      this.squareEight = "O";
    }
  } else if (clickedSquareNumber == 9) {
    if (this.squareNine == " ") {
      this.squareNine = "O";
    }
  }
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


// jQuery functions :

$(document).ready(function() {

  $(.player-data).submit(function() {
    event.preventDefault();

    var playerX = new PlayerX($("input#playerX-name").val(),
      $("input#playerX-color").val());
    var playerO = new PlayerO($("input#playerO-name").val(),
      $("input#playerO-color").val());
    var board = new Board();

    return playerX;
    return playerO;
  });

});
