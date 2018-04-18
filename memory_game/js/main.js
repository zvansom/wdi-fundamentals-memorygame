var cards = [
  {
  rank: 'queen',
  suit: 'hearts',
  cardImage: 'images/queen-of-hearts.png',
  },
  {
    rank: 'queen',
    suit: 'diamonds',
    cardImage: 'images/queen-of-diamonds.png',
  },
  {
    rank: 'king',
    suit: 'hearts',
    cardImage: 'images/king-of-hearts.png',
  },
  {
    rank: 'king',
    suit: 'hearts',
    cardImage: 'images/king-of-diamonds.png',
  }
];
var cardsInPlay = [];

var flipCard = function(cardId) {
  console.log("User flipped " + cards[cardId].rank);
  cardsInPlay.push(cards[cardId].rank);
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);

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
