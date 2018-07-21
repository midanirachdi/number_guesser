/* 
  Game rules:
  - Player must guess a number between a min and a max
  - Player gets a certain amount of guesses
  - Notify player of the correct answer if he loses
  - Let player choose to play again   
*/


// game values 
let min = 1,
    max = 10,
    answer = parseInt(Math.floor(Math.random() * max + min));
    remainingGuesses = 3;

// using full qS for consistency
const minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessInput = document.querySelector('#guess-input'),
      guessBtn = document.querySelector('#guess-btn'),
      msg = document.querySelector('.message'),
      game = document.querySelector('#game');

// assign min and max UI
minNum.textContent = min;
maxNum.textContent = max;


if (localStorage.getItem('remainingGuesses')) {
  remainingGuesses = parseInt(localStorage.getItem('remainingGuesses'));
  console.log(remainingGuesses);

} else {
  remainingGuesses = 3;
  localStorage.setItem('remainingGuesses', remainingGuesses);
}


guessBtn.addEventListener('click', showResult);
game.addEventListener('mousedown', (e) => {
  if (e.target.className === 'play-again') {
    remainingGuesses = 3;
    localStorage.setItem('remainingGuesses', remainingGuesses);
    window.location.reload();
  }
});


function showResult() {
  let guess = parseInt(guessInput.value);

  // can't use (guess ===NaN) apprently
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }
  // check if won
  if (answer === guess) {
    gameOver('green', 'Good job my friend');
    remainingGuesses = 3;
    localStorage.setItem('remainingGuesses', remainingGuesses);
  }

  //loss
  else {
    remainingGuesses--;
    //game over
    if (remainingGuesses === 0) {
      gameOver('red', `GAME OVER ! the answer was ${answer}`);
    } else {
      setMessage(`Gotcha n00b , you have ${remainingGuesses} ${remainingGuesses < 2 ? 'attempt' : 'attempts'} left`, 'red');
      guessInput.style.borderColor = 'red';
      guessInput.value = '';
      localStorage.setItem('remainingGuesses', remainingGuesses);
    }
  }
}
function setMessage(m, c) {
  msg.innerText = m
  msg.setAttribute('style', `color:${c}`);
}
//Hoisting is JavaScript's default behavior of moving declarations to the top.
function gameOver(color, message) {
  guessInput.setAttribute('disabled', 'true');
  guessInput.style.borderColor = color;

  setMessage(message, color);
  guessBtn.value = "Play again";
  guessBtn.className += 'play-again';
}