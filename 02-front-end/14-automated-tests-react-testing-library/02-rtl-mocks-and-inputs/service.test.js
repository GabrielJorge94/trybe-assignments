const service = require('./service');

describe('Testa funcao que gera nuymero aleatorio', () => {
  it('Verifica se a funcao foi chamada, qual o valor retornado e quantas vezes foi chamada', () => {
    service.generateRandomNumber = jest.fn();

    service.generateRandomNumber();

    expect(service.generateRandomNumber).toHaveBeenCalled();

    service.generateRandomNumber = jest.fn().mockReturnValue(10);

    expect(service.generateRandomNumber()).toBe(10);

    expect(service.generateRandomNumber).toHaveBeenCalledTimes(1);
  });
});
