// Board prototype constructor :

function Board(squareOne, squareTwo, squareThree, squareFour, squareFive, squareSix, squareSeven, squareEight, squareNine, turn) {
  this.squareOne = squareOne;
  this.squareTwo = squareTwo;
  this.squareThree = squareThree;
  this.squareFour = squareFour;
  this.squareFive  = squareFive;
  this.squareSix = squareSix;
  this.squareSeven = squareSeven;
  this.squareEight = squareEight;
  this.squareNine = squareNine;
  this.turn = turn;
}


// Function that determines if there's a winner :

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


// Function that places an X on the board :

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


// Function that places an O on the board :

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


// Function that disables clicking of squares :

Board.prototype.clearAll = function() {
  $(".square-one").off();
  $(".square-two").off();
  $(".square-three").off();
  $(".square-four").off();
  $(".square-five").off();
  $(".square-six").off();
  $(".square-seven").off();
  $(".square-eight").off();
  $(".square-nine").off();
}


// PlayerX prototype constructor :

function PlayerX(playerName, playerColor) {
  this.playerName = playerName;
  this.playerColor = playerColor;
}




// PlayerO prototype constructor :

function PlayerO(playerName, playerColor) {
  this.playerName = playerName;
  this.playerColor = playerColor;
}


// Initialize variables :

var board = new Board(" ", " ", " ", " ", " ", " ", " ", " ", " ", "X");
var playerX = new PlayerX(" ", " ");
var playerO = new PlayerO(" ", " ");


// Sound effect :

var clickSound = new Audio("sounds/beep.mp3");


// jQuery functions :

$(document).ready(function() {


// Start game button :

  $("form#player-data").submit(function() {
    event.preventDefault();

    playerX.playerName = $("input#playerX-name").val();
    playerX.playerColor = $("input#playerX-color").val();
    playerO.playerName = $("input#playerO-name").val();
    playerO.playerColor = $("input#playerO-color").val();

    $(".playerX-name").empty().val();
    $(".playerX-name").append(playerX.playerName);
    $(".playerO-name").empty().val();
    $(".playerO-name").append(playerO.playerName);
    $(".turn").empty().val();
    $(".turn").append(playerX.playerName);

    $(".first-page").toggle();
    $(".second-page").toggle();
  });


// Clicking on grid functions :
// Square one :

  $(".square-one").click(function() {
    if (board.turn == "X") {
      board.turn = "O";
      $(".square-one").empty().val();
      $(".square-one").append("X");
      board.squareOne = "X";
      $(".turn").empty().val();
      $(".turn").append(playerO.playerName);
      if (board.winner() == "winner") {
        $(".turn-title").toggle();
        $(".winner").toggle();
        board.clearAll();
      }
    } else {
      board.turn = "X";
      $(".square-one").empty().val();
      $(".square-one").append("O");
      board.squareOne = "O";
      $(".turn").empty().val();
      $(".turn").append(playerX.playerName);
      if (board.winner() == "winner") {
        $(".turn-title").toggle();
        $(".winner").toggle();
        board.clearAll();
      }
    }
    $(this).off();
    $(this).removeClass('square-one clickable');
  });


// Square two :

  $(".square-two").click(function() {
    if (board.turn == "X") {
      board.turn = "O";
      $(".square-two").empty().val();
      $(".square-two").append("X");
      board.squareTwo = "X";
      $(".turn").empty().val();
      $(".turn").append(playerO.playerName);
      if (board.winner() == "winner") {
        $(".turn-title").toggle();
        $(".winner").toggle();
        board.clearAll();
      }
    } else {
      board.turn = "X";
      $(".square-two").empty().val();
      $(".square-two").append("O");
      board.squareTwo = "O";
      $(".turn").empty().val();
      $(".turn").append(playerX.playerName);
      if (board.winner() == "winner") {
        $(".turn-title").toggle();
        $(".winner").toggle();
        board.clearAll();
      }
    }
    $(this).off();
    $(this).removeClass('square-two clickable');

  });


// Square three :

  $(".square-three").click(function() {
    if (board.turn == "X") {
      board.turn = "O";
      $(".square-three").empty().val();
      $(".square-three").append("X");
      board.squareThree = "X";
      $(".turn").empty().val();
      $(".turn").append(playerO.playerName);
      if (board.winner() == "winner") {
        $(".turn-title").toggle();
        $(".winner").toggle();
        board.clearAll();
      }
    } else {
      board.turn = "X";
      $(".square-three").empty().val();
      $(".square-three").append("O");
      board.squareThree = "O";
      $(".turn").empty().val();
      $(".turn").append(playerX.playerName);
      if (board.winner() == "winner") {
        $(".turn-title").toggle();
        $(".winner").toggle();
        board.clearAll();
      }
    }
    $(this).off();
    $(this).removeClass('square-three clickable');
  });


// Square four :

  $(".square-four").click(function() {
    if (board.turn == "X") {
      board.turn = "O";
      $(".square-four").empty().val();
      $(".square-four").append("X");
      board.squareFour = "X";
      $(".turn").empty().val();
      $(".turn").append(playerO.playerName);
      if (board.winner() == "winner") {
        $(".turn-title").toggle();
        $(".winner").toggle();
        board.clearAll();
      }
    } else {
      board.turn = "X";
      $(".square-four").empty().val();
      $(".square-four").append("O");
      board.squareFour = "O";
      $(".turn").empty().val();
      $(".turn").append(playerX.playerName);
      if (board.winner() == "winner") {
        $(".turn-title").toggle();
        $(".winner").toggle();
        board.clearAll();
      }
    }
    $(this).off();
    $(this).removeClass('square-four clickable');
  });


// Square five :

  $(".square-five").click(function() {
    if (board.turn == "X") {
      board.turn = "O";
      $(".square-five").empty().val();
      $(".square-five").append("X");
      board.squareFive = "X";
      $(".turn").empty().val();
      $(".turn").append(playerO.playerName);
      if (board.winner() == "winner") {
        $(".turn-title").toggle();
        $(".winner").toggle();
        board.clearAll();
      }
    } else {
      board.turn = "X";
      $(".square-five").empty().val();
      $(".square-five").append("O");
      board.squareFive = "O";
      $(".turn").empty().val();
      $(".turn").append(playerX.playerName);
      if (board.winner() == "winner") {
        $(".turn-title").toggle();
        $(".winner").toggle();
        board.clearAll();
      }
    }
    $(this).off();
    $(this).removeClass('square-five clickable');
  });


// Square six :

  $(".square-six").click(function() {
    if (board.turn == "X") {
      board.turn = "O";
      $(".square-six").empty().val();
      $(".square-six").append("X");
      board.squareSix = "X";
      $(".turn").empty().val();
      $(".turn").append(playerO.playerName);
      if (board.winner() == "winner") {
        $(".turn-title").toggle();
        $(".winner").toggle();
        board.clearAll();
      }
    } else {
      board.turn = "X";
      $(".square-six").empty().val();
      $(".square-six").append("O");
      board.squareSix = "O";
      $(".turn").empty().val();
      $(".turn").append(playerX.playerName);
      if (board.winner() == "winner") {
        $(".turn-title").toggle();
        $(".winner").toggle();
        board.clearAll();
      }
    }
    $(this).off();
    $(this).removeClass('square-six clickable');
  });


// Square seven :

  $(".square-seven").click(function() {
    if (board.turn == "X") {
      board.turn = "O";
      $(".square-seven").empty().val();
      $(".square-seven").append("X");
      board.squareSeven = "X";
      $(".turn").empty().val();
      $(".turn").append(playerO.playerName);
      if (board.winner() == "winner") {
        $(".turn-title").toggle();
        $(".winner").toggle();
        board.clearAll();
      }
    } else {
      board.turn = "X";
      $(".square-seven").empty().val();
      $(".square-seven").append("O");
      board.squareSeven = "O";
      $(".turn").empty().val();
      $(".turn").append(playerX.playerName);
      if (board.winner() == "winner") {
        $(".turn-title").toggle();
        $(".winner").toggle();
        board.clearAll();
      }
    }
    $(this).off();
    $(this).removeClass('square-seven clickable');
  });


// Square eight :

  $(".square-eight").click(function() {
    if (board.turn == "X") {
      board.turn = "O";
      $(".square-eight").empty().val();
      $(".square-eight").append("X");
      board.squareEight = "X";
      $(".turn").empty().val();
      $(".turn").append(playerO.playerName);
      if (board.winner() == "winner") {
        $(".turn-title").toggle();
        $(".winner").toggle();
        board.clearAll();
      }
    } else {
      board.turn = "X";
      $(".square-eight").empty().val();
      $(".square-eight").append("O");
      board.squareEight = "O";
      $(".turn").empty().val();
      $(".turn").append(playerX.playerName);
      if (board.winner() == "winner") {
        $(".turn-title").toggle();
        $(".winner").toggle();
        board.clearAll();
      }
    }
    $(this).off();
    $(this).removeClass('square-eight clickable');
  });


// Square nine :

  $(".square-nine").click(function() {
    if (board.turn == "X") {
      board.turn = "O";
      $(".square-nine").empty().val();
      $(".square-nine").append("X");
      board.squareNine = "X";
      $(".turn").empty().val();
      $(".turn").append(playerO.playerName);
      if (board.winner() == "winner") {
        $(".turn-title").toggle();
        $(".winner").toggle();
        board.clearAll();
      }
    } else {
      board.turn = "X";
      $(".square-nine").empty().val();
      $(".square-nine").append("O");
      board.squareNine = "O";
      $(".turn").empty().val();
      $(".turn").append(playerX.playerName);
      if (board.winner() == "winner") {
        $(".turn-title").toggle();
        $(".winner").toggle();
        board.clearAll();
      }
    }
    $(this).off();
    $(this).removeClass('square-nine clickable');
  });


// Clicking a color choice :

  $(".red-button-x").click(function() {
    clickSound.play();
    playerX.playerColor = "red";
    $(".player-x").css("color", "red");
  });

  $(".red-button-o").click(function() {
    clickSound.play();
    playerO.playerColor = "red";
    $(".player-o").css("color", "red");
  });

  $(".blue-button-x").click(function() {
    clickSound.play();
    playerX.playerColor = "blue";
    $(".player-x").css("color", "blue");
  });

  $(".blue-button-o").click(function() {
    clickSound.play();
    playerO.playerColor = "blue";
    $(".player-o").css("color", "blue");
  });

  $(".green-button-x").click(function() {
    clickSound.play();
    playerX.playerColor = "green";
    $(".player-x").css("color", "green");
  });

  $(".green-button-o").click(function() {
    clickSound.play();
    playerO.playerColor = "green";
    $(".player-o").css("color", "green");
  });

  $(".purple-button-x").click(function() {
    clickSound.play();
    playerX.playerColor = "purple";
    $(".player-x").css("color", "purple");
  });

  $(".purple-button-o").click(function() {
    clickSound.play();
    playerO.playerColor = "purple";
    $(".player-o").css("color", "purple");
  });

});
