
const math = require('./math');
let { somar, subtrair, multiplicar, dividir: mockDividir } = require('./math');

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
});

// Faça o mock da função somar e implemente uma função que recebe dois valores e retorna sua soma. Teste a chamada, o retorno e os parâmetros passados.

test('Faça o mock da função somar e implemente uma função que recebe dois valores e retorna sua soma', () => {
  somar = jest.fn().mockImplementation((a, b) => a + b);

  somar(2, 3);
  expect(somar).toHaveBeenCalled();
  expect(somar).toHaveBeenCalledTimes(1);
  expect(somar).toHaveBeenCalledWith(2, 3);
  expect(somar(2, 3)).toBe(5);
});

// Faça o mock da função dividir e implemente um retorno padrão com o valor '15'. Implemente também os seguintes valores para a primeira e segunda chamadas: '2' e '5'. Teste a chamada, o retorno, os parâmetros e quantas vezes a função foi chamada.

test('', () => {
  const mockDividir = jest.spyOn(math, 'dividir');
  mockDividir.mockReturnValue(15);
  mockDividir.mockReturnValueOnce(2);
  mockDividir.mockReturnValueOnce(5);

  expect(mockDividir(4, 2)).toBe(2);
  expect(mockDividir).toHaveBeenCalled();
  expect(mockDividir).toHaveBeenCalledTimes(1);
  expect(mockDividir).toHaveBeenCalledWith(4, 2);

  expect(mockDividir(10, 2)).toBe(5);
  expect(mockDividir).toHaveBeenCalledTimes(2);
  expect(mockDividir).toHaveBeenCalledWith(10, 2);

  expect(mockDividir(30, 2)).toBe(15);
  expect(mockDividir).toHaveBeenCalledTimes(3);
  expect(mockDividir).toHaveBeenCalledWith(30, 2);
});
