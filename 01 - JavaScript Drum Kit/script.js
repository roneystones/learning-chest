function playSound(event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);

  // stop the function from running if invalid keypress
  if (!audio) return;

  // rewind audio to the start, otherwise, if the key is pressed twice rapidly, the soundclip will only play through once
  audio.currentTime = 0;

  audio.play();
  key.classList.add('playing');
}

function removeTransition(event) {
  // skip it if it's not a transform
  if (event.propertyName !== 'transform') return;

  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
// keys.forEach() instead of just forEach(), which means it's a property of an array
// arrow functions is ES6 syntax
// transitioned: a css transition has completed

window.addEventListener('keydown', playSound);
// window, not document. document stands for DOM and window is the global object in a browser. the root object of the DOM
