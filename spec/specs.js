// Tests for Board :

describe("Board", function() {

  it("it creates a Board with specified properties.", function() {
    var testBoard = new Board(" ", " ", " ",
                              " ", " ", " ",
                              " ", " ", " ");
    expect(testBoard.squareOne).to.equal(" ");
    expect(testBoard.squareTwo).to.equal(" ");
    expect(testBoard.squareThree).to.equal(" ");
    expect(testBoard.squareFour).to.equal(" ");
    expect(testBoard.squareFive).to.equal(" ");
    expect(testBoard.squareSix).to.equal(" ");
    expect(testBoard.squareSeven).to.equal(" ");
    expect(testBoard.squareEight).to.equal(" ");
    expect(testBoard.squareNine).to.equal(" ");
  });

  it("it finds a simple winner", function() {
    var testBoard = new Board("X", "X", "X",
                              " ", " ", " ",
                              " ", " ", " ");
    expect(testBoard.winner()).to.equal("winner");
  });

  it("it finds a simple loser", function() {
    var testBoard = new Board("X", "O", "X",
                              " ", " ", " ",
                              " ", " ", " ");
    expect(testBoard.winner()).to.equal("no winner");
  });

  it("it finds a diagonal winner with PlayerX", function() {
    var testBoard = new Board("X", "O", "X",
                              "O", "X", " ",
                              " ", " ", "X");
    expect(testBoard.winner()).to.equal("winner");
  });

  it("it finds a diagonal winner with PlayerO", function() {
    var testBoard = new Board("O", "X", "X",
                              " ", "O", "X",
                              " ", " ", "O");
    expect(testBoard.winner()).to.equal("winner");
  });

  it("it finds some other winner I randomly wrote", function() {
    var testBoard = new Board("O", "O", "X",
                              "O", "X", "X",
                              "O", "X", "O");
    expect(testBoard.winner()).to.equal("winner");
  });

  it("it finds some a cat's game if the the board is full and there is no winner", function() {
    var testBoard = new Board("X", "O", "X",
                              "O", "X", "X",
                              "O", "X", "O");
    expect(testBoard.winner()).to.equal("cat's game");
  });

  it("it can change when clicked", function() {
    var testBoard = new Board("X", "O", "X",
                              "O", "X", "X",
                              "O", "X", " ");
    testBoard.placeX(9);
    expect(testBoard.squareNine).to.equal("X");
  });

});


// Tests for PlayerX :

describe("PlayerX", function() {

  it("it creates a Player with certain properties.", function() {
    var testPlayerX = new PlayerX("Jose Torres", "purple");
    expect(testPlayerX.playerName).to.equal("Jose Torres");
    expect(testPlayerX.playerColor).to.equal("purple");
  });

});


// Tests for PlayerO :

describe("PlayerO", function() {

  it("it creates a Player with certain properties.", function() {
    var testPlayerO = new PlayerO("Jose Torres", "purple");
    expect(testPlayerO.playerName).to.equal("Jose Torres");
    expect(testPlayerO.playerColor).to.equal("purple");
  });

});
