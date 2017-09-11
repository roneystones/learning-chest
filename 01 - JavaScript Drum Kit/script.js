function playSound(event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);

  // interrompe a função caso tecla inválida for pressioada
  if (!audio) return;

  // retorna audio para o começo sempre que a tecla for pressionada
  audio.currentTime = 0;

  audio.play();
  key.classList.add('playing');
}

function removeTransition(event) {
  // considera apenas a transição transform, ignorando as outras
  if (event.propertyName !== 'transform') return;

  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
// keys.forEach() pois se trata de um array
// arrow functions = sintaxe ES6
// transitionend = quando uma transição do CSS termina

window.addEventListener('keydown', playSound);
// window ao invés de document. document representa DOM e window é o objeto global do navegador, root do DOM
