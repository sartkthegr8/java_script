// ❤️1

// let body = document.getElementsByTagName('body');
let body = document.body;
// console.log(body);
let buttons = document.querySelectorAll('.button');
// console.log(buttons);

buttons.forEach((button) => {
  // console.log(button);
  button.addEventListener('click', (e) => {
    // console.log(e.target);
    // console.log(e.target);
    if (e.target.id === 'grey') {
      // console.log('yooo');
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      // console.log('yooo');
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      // console.log('yooo');
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      // console.log('yooo');
      body.style.backgroundColor = e.target.id;
    }
  });
});

// ========================================================================================================================================================

// ❤️❤️2

// let height = document.querySelector('#height').value;
// let weight = document.querySelector('#weight').value;
// ❤️because it take zero value or null

let form = document.querySelector('form');
// console.log(form);

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let height = document.querySelector('#height').value;
  let weight = document.querySelector('#weight').value;
  let results = document.querySelector('#results');

  // secure checker for user value
  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = 'Please give valid height ${height}';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = 'Please give valid weight ${weight}';
  } else {
    const bmi = (weight / ((height * height) / 1000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
  }
});


// ========================================================================================================================================================


// ❤️❤️❤️3

const clock = document.getElementById('clock');
// clock.innerHTML = 'hello';

setInterval(() => {
  let date = new Date();
  let time = date.toLocaleTimeString();
  clock.innerHTML = time;
}, 1000);


// ========================================================================================================================================================

// ❤️❤️❤️❤️4

let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

// function validateGuess(guess) {}
// function checkGuess(guess) {}
// function displayGuess(guess) {}
// function displayMessage(message) {}
// function endGame() {}
// function newGame() {}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    //push in array
    prevGuess.push(guess);
    console.log(prevGuess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

//❤️IMP
function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}


// ========================================================================================================================================================

