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