let secretNumber;
let lastGuess;
let guessesRemaining = 10;
document.getElementById("guesses-remaining").innerHTML = 10;

const CORRECT_MESSAGE = "Correct! You must be a powerful psychic.";
const INCORRECT_MESSAGE = "Incorrect. You are merely a normal human.";


function generateNumber() {
  secretNumber = Math.floor(Math.random() * 10);
  console.log(secretNumber);

  // MILESTONE 1: Right now the secret number is always 5. Change this
  // to return a secret number between 1 and 10.
}

document.addEventListener('DOMContentLoaded',generateNumber);

function checkIsCorrect() {
  if (lastGuess === secretNumber) {
    return true;
  } else return false;
  // MILESTONE 3: Right now every guess will be true. Change
  // the above code so it checks to make sure lastGuess
  // is equal to secretNumber.
}

function makeGuess() {
  if (typeof(secretNumber) === 'undefined') {
    generateNumber();
  } else {
  lastGuess = parseInt(prompt("What is your guess"));
  }
  // MILESTONE 2: ADD CODE HERE to pop up a dialog box
  // asking the user for a number.

  //--------------------------------------------
  updatePage();
}

// Don't worry about this part! Feel free to play around,
// but we'll teach you all about how JavaScript and HTML
// work together in the next section. If you're done Milestone
// 5, you'll need to fiddle around in here a bit.

function updatePage() {
  document.getElementById("last-guess").innerHTML = lastGuess;
  const correct = document.getElementById("correct");
  const isCorrect = checkIsCorrect();
  if (isCorrect) {
    correct.innerHTML = CORRECT_MESSAGE;
    correct.classList.add("green");
    correct.classList.remove("red");
  } else {
    correct.innerHTML = INCORRECT_MESSAGE;
    correct.classList.add("red");
    correct.classList.remove("green");
  }
  guessesRemaining--;
  const remaining = document.getElementById("guesses-remaining");
  remaining.innerHTML = guessesRemaining;
  if (guessesRemaining === 0) {
    alert('You lose');
  }
}