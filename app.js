import compareNumbers from './compare-numbers.js';

const guessBox = document.getElementById('guess-box');

const inputButton = document.getElementById('input-button');

let guessesRemainingDisplay = document.getElementById('guesses-remaining');
guessesRemainingDisplay.textContent = 4;
let guessesRemaining = 4;

const guessHint = document.getElementById('guess-hint');

const retryButton = document.getElementById('refresh-button');

const displayHiddenNumber = document.getElementById('hidden-number');

const numberReveal = document.getElementById('number-reveal');

const hiddenNumber = Math.floor(Math.random() * 20) + 1;
// console.log(hiddenNumber);

displayHiddenNumber.textContent = hiddenNumber;

inputButton.addEventListener('click', () => {
    const userGuess = guessBox.value;
    const checkGuess = compareNumbers(userGuess, hiddenNumber);
    if (checkGuess === -1){
        guessHint.textContent = 'You\'re too low!';
        guessesRemaining -= 1;
    } else if (checkGuess === 1){
        guessHint.textContent = 'You\'re too high!';
        guessesRemaining -= 1;
    } else if (checkGuess === false){
        guessHint.textContent = 'You must guess a number between 1 and 20!';
    } else {
        guessHint.textContent = 'That\'s right!!! You guessed the super secret number! You\'re the best!!!';
        inputButton.setAttribute('disabled', false);
    }
    if (guessesRemaining === 0){
        inputButton.setAttribute('disabled', false);
    } 
    switch (guessesRemaining){
        case 4:
            guessesRemainingDisplay.textContent = 4;
            break;
        case 3:
            guessesRemainingDisplay.textContent = 3;
            break;
        case 2:
            guessesRemainingDisplay.textContent = 2;
            break;
        case 1:
            guessesRemainingDisplay.textContent = 1;
            break;
        case 0:
            guessesRemainingDisplay.textContent = 0;
            guessHint.textContent = 'You\'re out of guesses. You lose! Good day!';
            retryButton.classList.remove('hidden');
            numberReveal.classList.remove('hidden');
            break;
    }
});

retryButton.addEventListener('click', () => {
    location.reload();
});