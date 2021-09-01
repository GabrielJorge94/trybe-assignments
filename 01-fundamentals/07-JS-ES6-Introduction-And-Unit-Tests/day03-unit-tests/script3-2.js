const assert = require('assert')
const removeVowels = (word) => {
  const characters = word.split("");
  const results = [];
  let counter = 1;

  for (let index = 0; index < characters.length; index += 1) {
    if (
      characters[index] === "a" ||
      characters[index] === "o" ||
      characters[index] === "i" ||
      characters[index] === "e" ||
      characters[index] === "u"
      ) {
        results.push(counter);
        counter += 1
    } else {
      results.push(characters[index]);
    }
  }
  return results.join('');
};

const parameter = "Dayane";
const result = "D1y2n3";

assert.strictEqual(removeVowels(parameter), result, 'deve retornar result');