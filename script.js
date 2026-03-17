// Hearts
const createHeart = () => {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * window.innerWidth + 'px';
  heart.style.backgroundColor = `hsl(${Math.random()*360}, 100%, 70%)`;
  heart.style.animationDuration = (4 + Math.random() * 3) + 's';
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 7000);
}
setInterval(createHeart, 300);

// Confetti
const createConfetti = () => {
  const confetti = document.createElement('div');
  confetti.classList.add('confetti');
  confetti.style.left = Math.random() * window.innerWidth + 'px';
  confetti.style.backgroundColor = `hsl(${Math.random()*360}, 100%, 50%)`;
  confetti.style.animationDuration = (3 + Math.random() * 2) + 's';
  document.body.appendChild(confetti);
  setTimeout(() => confetti.remove(), 5000);
}
setInterval(createConfetti, 100);
