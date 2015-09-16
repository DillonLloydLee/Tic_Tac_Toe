// Tests :

describe("Board", function() {

  it("it creates a Board with specified properties", function() {
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

});

// describe("PlayerX", function() {
//
//   it("it creates a new ticket with certain properties.", function() {
//     var testPlayerX = new PlayerX("Rambo", "2015-09-16", "5:30pm", "$10.25");
//     expect(testPlayerX.title).to.equal("Rambo");
//
//   });
//
// });
