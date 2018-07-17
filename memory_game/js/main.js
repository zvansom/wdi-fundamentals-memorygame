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

var score = 0;

// iterator is used in randomization of cards
var iterator = [...cards.keys()];

var createBoard = function() {
  var shuffledIndexes = shuffle(iterator);
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', shuffledIndexes[i]);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);
  }
}

var shuffle = function(array) {
  //Fisher-Yates Shuffle Algorithm
  var counter = array.length;

  while (counter > 0) {
    var index = Math.floor(Math.random() * counter);
    counter--;

    var temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }
  return array;
}

var flipCard = function() {
  var imageClicked = this.getAttribute('src');
  // check if card has already been flipped
  if (imageClicked !== 'images/back.png') {
    alert("You already found this match.  Choose an unrevealed card.")
  } else {
    var cardId = this.getAttribute('data-id');
    cardsInPlay.push(cardId);
    this.setAttribute('src', cards[cardId].cardImage);
    checkForMatch();
  }
}

var checkForMatch = function() {
  if (cardsInPlay.length >= 2) {
    if (cards[cardsInPlay[0]].rank === cards[cardsInPlay[1]].rank) {
      alert("You found a match!");
      score++;
      updateScore();
    } else {
      alert("Sorry, try again.");
      resetCards();
    }
  }
}

var updateScore = function() {
  document.getElementById('player-score').innerHTML = score;
  cardsInPlay = [];

  //if all cards have been revealed, reset the board
  if(score%(cards.length/2) === 0) {
    var board = document.getElementById('game-board');
    while (board.firstChild) {
      board.removeChild(board.firstChild)
    }
    createBoard();
  }
}

var resetCards = function() {
  for(var j = 0; j < cardsInPlay.length; j++) {
    var cardImgSrc = cards[cardsInPlay[j]].cardImage;
    document.querySelector('[src="' + cardImgSrc + '"]')
      .setAttribute('src', 'images/back.png');
  }
  cardsInPlay = [];
}

createBoard();
