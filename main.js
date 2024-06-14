const generateDeck = () => {
  const deck = [];
  const suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];
  const ranks = [
    '2', '3', '4', '5', '6',
    '7', '8', '9', '10',
    'Jack', 'Queen', 'King', 'Ace'
  ];

  for (const rank of ranks) {
    for (const suit of suits) {
      deck.push({ rank: rank, suit: suit });
    }
  }
  return deck;
};

const drawCard = (deck) => {
  const randomIndex = Math.floor(Math.random() * deck.length);
  const card = deck[randomIndex];
  deck.splice(randomIndex, 1);
  return card;
};

const checkScore = (hand) => {
  let total = 0;

  for (const cardObject of hand) {
    if (cardObject.rank === 'King' || cardObject.rank === 'Queen' || cardObject.rank === 'Jack') {
      total += 10;
    } else if (cardObject.rank === 'Ace') {
      total += 1;
    } else {
      total += Number(cardObject.rank);
    }
  }
  return total; // Return the total instead of logging it
};

const myDeck = generateDeck();
const playerHand = [];
const dealerHand = [];

playerHand.push(drawCard(myDeck));
playerHand.push(drawCard(myDeck));
dealerHand.push(drawCard(myDeck));
dealerHand.push(drawCard(myDeck));

console.log(playerHand);
console.log(checkScore(playerHand));
console.log(dealerHand);
console.log(checkScore(dealerHand)); // Fixed the typo

while (true) {
  playerHand.push(drawCard(myDeck));
  const playerScore = checkScore(playerHand);
  let dealerScore = checkScore(dealerHand);
  if (playerScore > 21) {
    console.log(`You lost! Your final score was: ${playerScore}, while the dealer had ${dealerScore}`);
    break;
  }
  if (playerScore === 21) {
    console.log(`You win! Your final score was ${playerScore}, while the dealer had ${dealerScore}`);
    break;
  };

  dealerHand.push(drawCard(myDeck));
  dealerScore = checkScore(dealerHand);
  if (dealerScore > 21) {
    console.log(`You win! Your final score was: ${playerScore}, while the dealer had ${dealerScore}`);
    break;
  }
  if (playerScore === 21) {
    console.log(`You lost! Your final score was: ${playerScore}, while the dealer had ${dealerScore}`);
    break;
  };
};
