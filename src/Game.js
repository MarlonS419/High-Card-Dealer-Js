import Deck from './Deck.js';
import Hand from './Hand.js';

console.log("GAME START");

// Create a new deck
const newDeck = new Deck();
console.log("A new deck has been created");

// Deal cards
const hand1 = new Hand(newDeck.deal());
const hand2 = new Hand(newDeck.deal());

console.log("player 1 has");
console.log(hand1.cards);
console.log("player2 has")
console.log(hand2.cards);

// total hands value
const hand1Value = hand1.value();
const hand2Value = hand2.value();

console.log(`Player 1's hand value: ${hand1Value}`);
console.log(`Player 2's hand value: ${hand2Value}`);

// judge results of game
if (hand1Value === hand2Value) {
    console.log("Tie!");
} else if (hand1Value > hand2Value) {
    console.log("Player 1 wins!");
} else {
    console.log("Player 2 wins!");
}
