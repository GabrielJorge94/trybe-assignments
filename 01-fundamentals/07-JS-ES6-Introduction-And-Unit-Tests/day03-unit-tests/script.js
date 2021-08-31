const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// Teste se o retorno de sum(4, 5) é 9

const expected = sum(4,5);
const expected2 = sum(0,0);

assert.strictEqual(expected, 9, 'a soma de 4 + 5 e 9');
assert.strictEqual(expected2, 0, 'a soma de 0 + 0 e 0');

assert.throws(() => {
  sum(4,"5");
}, /^Error: parameters must be numbers$/);

sum(4,"7");

