// IMPORT MODULES under test here:
// import example from '../src/example.js';
import compareNumbers from '../compare-numbers.js';
const test = QUnit.test;

test('compareNumbers should return -1 if userGuess is lower than hiddenNumber', function(assert) {
    const userGuess = 5;
    const hiddenNumber = 15;

    const comparison = compareNumbers(userGuess, hiddenNumber);

    assert.equal(comparison, -1);
});

test('compareNumbers should return 1 if userGuess is higher than hiddenNumber', function(assert) {
    const userGuess = 18;
    const hiddenNumber = 15;

    const comparison = compareNumbers(userGuess, hiddenNumber);

    assert.equal(comparison, 1);
});

test('compareNumbers should return 0 if userGuess is equal to hiddenNumber', function(assert) {
    const userGuess = 15;
    const hiddenNumber = 15;

    const comparison = compareNumbers(userGuess, hiddenNumber);

    assert.equal(comparison, 0);
});

// Test for invalid input

test('compareNumbers should return false if userGuess is less than 1', function(assert) {
    const userGuess = -2;
    const hiddenNumber = 15;

    const comparison = compareNumbers(userGuess, hiddenNumber);

    assert.equal(comparison, false);
});

test('compareNumbers should return false if userGuess is greater than 20', function(assert) {
    const userGuess = 23;
    const hiddenNumber = 15;

    const comparison = compareNumbers(userGuess, hiddenNumber);

    assert.equal(comparison, false);
});

test('compareNumbers should return false if userGuess is e', function(assert) {
    const userGuess = 'e';
    const hiddenNumber = 15;

    const comparison = compareNumbers(userGuess, hiddenNumber);

    assert.equal(comparison, false);
});