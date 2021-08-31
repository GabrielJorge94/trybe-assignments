// const assert = require('assert');

// function sum(a, b) {
//   if (typeof a !== 'number' || typeof b !== 'number') {
//     throw new Error('parameters must be numbers');
//   }

//   return a + b;
// }

// // Teste se o retorno de sum(4, 5) é 9

// const expected = sum(4,5);
// const expected2 = sum(0,0);

// assert.strictEqual(expected, 9, 'a soma de 4 + 5 e 9');
// assert.strictEqual(expected2, 0, 'a soma de 0 + 0 e 0');

// assert.throws(() => {
//   sum(4,"5");
// }, /^Error: parameters must be numbers$/);

// sum(4,"7");

const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// implemente seus testes aqui

const expected3 = myRemove([1,2,3,4],3);

assert.deepStrictEqual(expected3, [1,2,4], 'retorna o array sem o item');
assert.notDeepStrictEqual(expected3, [1,2,3,4], 'nao retorna o array com o item');

const myList = [5, 6, 7, 8];
const myListRemoved = myRemove(myList);
assert.deepStrictEqual(myListRemoved, [5, 6, 7, 8], 'erro');

const expected4 = myRemove([1,2,3,4], 5);
assert.deepStrictEqual(expected4, [1,2,3,4], 'retorna o array esperado');