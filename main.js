const cardFlippers = document.querySelectorAll('.card-flipper');

for (const cardFlipper of cardFlippers) {
  cardFlipper.addEventListener('mouseenter', () => {
    cardFlipper.querySelector('.card.front').classList.add('is-flipped');
    cardFlipper.querySelector('.card.back').classList.remove('is-flipped');
  });

  cardFlipper.addEventListener('mouseleave', () => {
    cardFlipper.querySelector('.card.front').classList.remove('is-flipped');
    cardFlipper.querySelector('.card.back').classList.add('is-flipped');
  });
}
