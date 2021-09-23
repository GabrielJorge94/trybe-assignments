const randomNumber = require('./exercise2');

let { generateRandomNumber } = require('./exercise2');

describe('utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez.', () => {
   generateRandomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);
  it('verifica se o resultado da divisão do primeiro numero pelo segundo numero retorna o valor esperado', () => {
    expect(generateRandomNumber(10, 2)).toBe(5);
  });
  it('verifica se a funcao foi chamada', () => {
    expect(generateRandomNumber).toHaveBeenCalled();
  });
  it('verifica quantas vezes a funcao foi chamada', () =>{
    expect(generateRandomNumber).toHaveBeenCalledTimes(1);
  })
});
