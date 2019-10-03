import compareNumbers from './compare-numbers.js';

const guessBox = document.getElementById('guess-box');

const inputButton = document.getElementById('input-button');

let guessesRemainingDisplay = document.getElementById('guesses-remaining');
guessesRemainingDisplay.textContent = 4;
let guessesRemaining = 4;

const guessHint = document.getElementById('guess-hint');

const hiddenNumber = Math.floor(Math.random() * 20) + 1;

inputButton.addEventListener('click', () => {
    const userGuess = guessBox.value;
    const checkGuess = compareNumbers(userGuess, hiddenNumber);
    if (guessesRemaining === 1){
        inputButton.setAttribute('disabled', false);
        guessHint.textContent = 'You\'re out of guesses! You lose! Good day!';
    } 
    if (checkGuess === -1){
        guessHint.textContent = 'You\'re too low!';
        guessesRemaining -= 1;
        guessesRemainingDisplay.textContent = guessesRemaining;
    } else if (checkGuess === 1){
        guessHint.textContent = 'You\'re too high!';
        guessesRemaining -= 1;
        guessesRemainingDisplay.textContent = guessesRemaining;
    } else {
        guessHint.textContent = 'That\'s right!!! You guessed the super secret number! You\'re the best!!!';
        guessesRemaining -= 1;
        guessesRemainingDisplay.textContent = guessesRemaining;
    }
});

