const pressed = [];
const secretWord = 'roper';

window.addEventListener('keyup', (e) => {
  console.log(e.key);
  pressed.push(e.key);
  pressed.splice(-secretWord.length - 1, pressed.length - secretWord.length); //start the count from the back/most recent key input
  if (pressed.join('').includes(secretWord)) {
    console.log('You got it!');
    cornify_add();
  }
})
