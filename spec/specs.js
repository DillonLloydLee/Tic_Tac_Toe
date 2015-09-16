// Tests for Board :

describe("Board", function() {

  it("it creates a Board with specified properties.", function() {
    var testBoard = new Board("Blank", "Blank", "Blank", "Blank", "Blank", "Blank", "Blank", "Blank", "Blank");
    expect(testBoard.squareOne).to.equal("Blank");
    expect(testBoard.squareTwo).to.equal("Blank");
    expect(testBoard.squareThree).to.equal("Blank");
    expect(testBoard.squareFour).to.equal("Blank");
    expect(testBoard.squareFive).to.equal("Blank");
    expect(testBoard.squareSix).to.equal("Blank");
    expect(testBoard.squareSeven).to.equal("Blank");
    expect(testBoard.squareEight).to.equal("Blank");
    expect(testBoard.squareNine).to.equal("Blank");
  });

  it("it finds a simple winner", function() {
    var testBoard = new Board("X", "X", "X", "Blank", "Blank", "Blank", "Blank", "Blank", "Blank");
    expect(testBoard.winner()).to.equal("PlayerX");
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
