var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";
/*
if (cardTwo === cardFour) {
    alert("You found a match!");
}
else {
    alert("Sorry, try again!");
}

if (cardOne === cardTwo) {
    alert("You found a match!");
}
else {
    alert("Sorry, try again!");
}

if (cardThree === cardFour) {
    alert("You found a match!");
}
else {
    alert("Sorry, try again!");
}
*/
// select the game board ID
var gameboard = document.getElementById('game-board');
//ask user how many cards to play with
var cardsNumber = prompt('How many cards?');
//for now we are using 4 cards only
cardsNumber = 4;
//create cards up to cardsNumber with loop
function createCards(x) {
    for (var i = 0; i < x; i++) {
    var newCard = document.createElement('div');
    newCard.className = 'card';
    document.getElementById('game-board').appendChild(newCard);
    }
}
createCards(cardsNumber);