const assert = require("assert");

const wordLengths = (array) => {
  let length = [];
  for (let index in array) {
    let wordLength = array[index].length;
    length.push(wordLength);
  }
  return length;
};
const words = ["sun", "potato", "roundabout", "pizza"];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);
