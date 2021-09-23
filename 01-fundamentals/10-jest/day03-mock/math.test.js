let { somar, subtrair, multiplicar, dividir } = require('./math');

// Faça o mock da funcão subtrair e teste sua chamada.

test('change somar implementation', () => {
  somar = jest.fn().mockImplementation((a, b) => a - b);

  somar(5, 1);
  expect(somar).toHaveBeenCalledTimes(1);
  expect(somar(5, 1)).toBe(4);
  expect(somar).toHaveBeenCalledTimes(2);
});

// Faça o mock da função multiplicar e implemente como retorno padrão o valor '10'. Teste a chamada e o retorno.

test('returne 10 as a value to function multiplicar', () => {
  multiplicar = jest.fn().mockReturnValue(10);

  expect(multiplicar()).toBe(10);
  expect(multiplicar).toHaveBeenCalledTimes(1);
})