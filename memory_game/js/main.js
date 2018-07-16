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
    suit: 'diamonds',
    cardImage: 'images/king-of-diamonds.png',
  }
];
var cardsInPlay = [];

var flipCard = function() {
  var cardId = this.getAttribute('data-id');
  console.log("User flipped " + cards[cardId].rank);
  cardsInPlay.push(cards[cardId]);
  this.setAttribute('src', cards[cardId].cardImage);
  checkForMatch(cardsInPlay[0], cardsInPlay[1]);
}

var checkForMatch = function(card1, card2) {
  if (cardsInPlay.length >= 2) {
    if (card1.rank === card2.rank) {
      alert("You found a match!");
    } else {
      alert("Sorry, try again.");
    }
  }
}

var createBoard = function() {
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);
  }
}

createBoard();
