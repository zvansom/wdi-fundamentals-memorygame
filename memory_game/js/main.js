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

var iterator = [...cards.keys()];
console.log("Iterator:" + iterator);

var updateScore = function() {
  document.getElementById('player-score').innerHTML = score;
  cardsInPlay = [];
  if(score%2 === 0) {
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

var flipCard = function() {
  var cardId = this.getAttribute('data-id');
  cardsInPlay.push(cardId);
  this.setAttribute('src', cards[cardId].cardImage);
  checkForMatch(cardsInPlay);
}

var checkForMatch = function(card1, card2) {
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

var shuffle = function(array) {
  //Fisher-Yates Shuffle
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

var createBoard = function() {
  var shuffledIndexes = shuffle(iterator);
  console.log("Shuffled: " + shuffledIndexes);
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', shuffledIndexes[i]);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);
  }
}

createBoard();
