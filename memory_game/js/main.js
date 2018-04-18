var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];
var flipCard = function(cardId) {
  console.log("User flipped " + cards[cardId]);
  cardsInPlay.push(cards[cardId]);
  checkForMatch(cardsInPlay[0], cardsInPlay[1])
}

var checkForMatch = function(card1, card2) {
  if (cardsInPlay.length >= 2) {
    if (card1 === card2) {
      alert("You found a match!");
    } else {
      alert("Sorry, try again.");
    }
  }
}

flipCard(0);
flipCard(2);
