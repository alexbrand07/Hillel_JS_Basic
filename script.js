




const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
const suits = ['hearts', 'diamonds', 'clubs', 'spades'];

function createCard(rank, suit) {
    const card = document.createElement('div');
    card.className = 'card';

    const rankElement = document.createElement('span');
    rankElement.textContent = rank;

    const suitImage = document.createElement('img');
    suitImage.src = `./images/${suit}.svg`;
    suitImage.alt = suit;

    card.appendChild(rankElement);
    card.appendChild(suitImage);

    return card;
}

const deck = document.createElement('div');
deck.className = 'deck';

ranks.forEach(rank => {
    suits.forEach(suit => {
        const card = createCard(rank, suit);
        deck.appendChild(card);
    });
});


document.body.appendChild(deck);



