const { afterEach } = require('@jest/globals');
const service = require('./service');

describe('Testa funcao que gera nuymero aleatorio', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Verifica se a funcao foi chamada, qual o valor retornado e quantas vezes foi chamada', () => {
    service.generateRandomNumber = jest.fn();

    service.generateRandomNumber();

    expect(service.generateRandomNumber).toHaveBeenCalled();

    service.generateRandomNumber = jest.fn().mockReturnValue(10);

    expect(service.generateRandomNumber()).toBe(10);

    expect(service.generateRandomNumber).toHaveBeenCalledTimes(1);
  });

  it('Teste se a função foi chamada e a nova implementação de divisão foi aplicada.', () => {
    service.generateRandomNumber = jest.fn().mockImplementation((num1, num2) => num1 / num2);

    expect(service.generateRandomNumber(10, 2)).toBe(5);

    expect(service.generateRandomNumber).toHaveBeenCalled();

    expect(service.generateRandomNumber).toHaveBeenCalledWith(10, 2);

    expect(service.generateRandomNumber).toHaveBeenCalledTimes(1);
  });
});
