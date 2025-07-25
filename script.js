const emojis = ['😃','😃','🐱','🐱','🍕','🍕','🚗','🚗','🌟','🌟','🎵','🎵','⚽','⚽','📚','📚'];
let shuffled = emojis.sort(() => 0.5 - Math.random());
let firstCard = null;
let secondCard = Boolean;
let lock = false;

const gameBoard = document.getElementById('gameBoard');

shuffled.forEach((emoji) => {
  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.emoji = emoji;
  card.textContent = '';
  
  card.addEventListener('click', () => {
    if (lock || card.classList.contains('flipped')) return;
    
    card.textContent = emoji;
    card.classList.add('flipped');

    if (!firstCard) {
      firstCard = card;
    } else {
      secondCard = card;
      lock = true;

      if (firstCard.dataset.emoji === secondCard.dataset.emoji) {
        firstCard = null;
        secondCard = null;
        lock = false;
      } else {
        setTimeout(() => {
          firstCard.textContent = '';
          secondCard.textContent = '';
          firstCard.classList.remove('flipped');
          secondCard.classList.remove('flipped');
          firstCard = null;
          secondCard = null;
          lock = false;
        }, 1000);
      }
    }
  });

  gameBoard.appendChild(card);
});
