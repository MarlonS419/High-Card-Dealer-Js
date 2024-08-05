import Card from './Card.js';

class Hand {
  constructor(cards) {
    this.cards = cards || [];
  }

  value() {
    return this.cards.reduce((total, card) => total + card.value(), 0);
  }
}

export default Hand;
