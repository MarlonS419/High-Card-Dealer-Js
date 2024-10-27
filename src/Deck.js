import _ from 'lodash';
import Card from './Card.js';

// suits and ranks var.
const suits = ['♦', '♣', '♠', '♥'];
const ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];

// Deck class with no arg. in the constructor to be able to just run when called.
class Deck {
  constructor() {
    // calling upon the cards var. within the buildDeck method
    this.cards = this.buildDeck();
  }
  // method to create deck
  buildDeck() {
    // empty cards array with variability
    let cards = [];
    // for each suit loop thru the ranks
    suits.forEach(suit => {
      // for each rank push the new card into the deck
      ranks.forEach(rank => {
        cards.push(new Card(rank, suit));
      });
    });
    // use lodash mod to  shuffle cards randomly
    return _.shuffle(cards);
  }
  // method to deal the randomized cards in sets of 4
  deal() {
    return this.cards.splice(0, 4);
  }
}

export default Deck;
