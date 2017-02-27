var cardsInPlay = [];
// will keep track of found cards
var pairsFound = 0;
// select the game board ID
var gameboard = document.getElementById('game-board');
//ask user how many cards to play with
var cardsNumber = prompt('How many cards?');
//for now we are using 4 cards only
//create cards up to cardsNumber with loop
var cards = 0;
if (cardsNumber == 4) {
        cards = ["king", "king", "queen", "queen"];
} else if (cardsNumber == 6) {
        cards = ["king", "king", "queen", "queen", "jack", "jack"];
} else if (cardsNumber == 8) {
        cards = ["king", "king", "queen", "queen", "jack", "jack", "ten", "ten"];
} else if (cardsNumber == 10) {
        cards = ["king", "king", "queen", "queen", "jack", "jack", "ten", "ten", "nine", "nine"];
} else if (cardsNumber == 12) {
        cards = ["king", "king", "queen", "queen", "jack", "jack", "ten", "ten", "nine", "nine", "eight", "eight"];
} else {
    alert("input must be an even number between 4 and 12!");
}

console.log(cards);
function createCards(x) {
    for (var i = 0; i < x; i++) {
    var newCard = document.createElement('div');
    newCard.className = 'card';
    document.getElementById('game-board').appendChild(newCard);
    }
}
createCards(cardsNumber);

function isTwoCards () {
    cardsInPlay.push(this.getAttribute('data-card'));
    if (cardsInPlay.length === 2) {
        isMatch(cardsInPlay);
        cardsInPlay = [];
    }
}

function createBoard () {
    for (var i = 0; i < cards.length; i++) {
        var cardElement = document.getElementsByClassName('card')[i];
        cardElement.setAttribute('data-card', cards[i]);
        cardElement.addEventListener('click', isTwoCards);
        cardElement.addEventListener('click', cardImg(i));
    }
}

function cardImg(x) {
    var card = document.getElementsByClassName('card')[x].getAttribute;
    console.log(card)
    if (card = 'king') {
        document.getElementsByClassName('card').innerHTML = '<img src="kingH.png" alt = "King of Hearts" />';
        console.log("king");
    } else {
        document.getElementsByClassName('card').innerHTML = '<img src="queenH.png" alt = "Queen of Hearts" />';
        console.log("queen");
    }
}
createBoard ();

function isMatch(a) {
    if (a[0] === a[1]) {
        document.getElementById('message').textContent = 'You found a match!';
        pairsFound = pairsFound + 1;
    } else {
        document.getElementById('message').textContent = 'Sorry, try again!';
    }
    if (pairsFound === cards.length / 2) {
        alert("you win!");
    }
}