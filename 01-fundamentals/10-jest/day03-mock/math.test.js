let { somar, subtrair, multiplicar, dividir } = require('./math');

// Faça o mock da funcão subtrair e teste sua chamada.

test('change somar implementation', () => {
  somar = jest.fn().mockImplementation((a, b) => a - b);

  somar(5, 1);
  expect(somar).toHaveBeenCalledTimes(1);
  expect(somar(5, 1)).toBe(4);
  expect(somar).toHaveBeenCalledTimes(2);
});
