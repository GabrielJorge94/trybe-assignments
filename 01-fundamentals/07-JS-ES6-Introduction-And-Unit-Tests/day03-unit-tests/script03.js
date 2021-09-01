const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
const expected = myRemoveWithoutCopy([1,2,3,4], 3);
assert.deepStrictEqual(expected, [1,2,4], 'retorna o array esperado');
// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
assert.notDeepStrictEqual(expected, [1,2,3,4], 'não retorna o array [1, 2, 3, 4]');
// Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações
const array = [7,8,9];
myRemoveWithoutCopy(array,8);
assert.notDeepStrictEqual(array, [7,8,9], 'array nao sofreu alteracao');
// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado
const expected2 = myRemoveWithoutCopy([1,2,3,4], 5);
assert.deepStrictEqual(expected2, [1,2,3,4], 'deve retornar o array [1,2,3,4]');