const service = require('./service');

describe('Testa funcao que gera numero aleatorio', () => {
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

  it('Testa se a função foi chamada e a nova implementação de multiplicacao foi aplicada.', () => {
    service.generateRandomNumber = jest.fn().mockImplementation((num1, num2, num3) => num1 * num2 * num3);

    expect(service.generateRandomNumber(10, 2, 3)).toBe(60);

    expect(service.generateRandomNumber).toHaveBeenCalled();

    expect(service.generateRandomNumber).toHaveBeenCalledWith(10, 2, 3);

    expect(service.generateRandomNumber).toHaveBeenCalledTimes(1);
  });
});

describe('Testa 3 funcoes do exercicio 4', () => {
  it('Verifica nova implementacao para a primeira funcao que deve retornar a string em lowerCase', () => {
    const mockUpperCaseString = jest
      .spyOn(service, 'upperCaseString')
      .mockImplementation((str) => str.toLowerCase());

    expect(mockUpperCaseString('TESTE')).toBe('teste');

    expect(mockUpperCaseString).toHaveBeenCalled();

    expect(mockUpperCaseString).toHaveBeenCalledTimes(1);

    expect(mockUpperCaseString).toHaveBeenCalledWith('TESTE');

    mockUpperCaseString.mockRestore();

    expect(service.upperCaseString('teste')).toBe('TESTE');
  });

  it('Verifica nova implementacao para a segunda funcao que deve retornar a ultima letra de uma string', () => {
    service.getFirstLetterString = jest.fn().mockImplementation((str) => str.charAt(str.length - 1));

    expect(service.getFirstLetterString('TESTE')).toBe('E');

    expect(service.getFirstLetterString).toHaveBeenCalled();

    expect(service.getFirstLetterString).toHaveBeenCalledWith('TESTE');

    expect(service.getFirstLetterString).toHaveBeenCalledTimes(1);
  });

  it('Verifica nova implementacao para a terceira funcao que deve retornar a concatenacao de tres strings', () => {
    service.concatString = jest.fn().mockImplementation(
      (str1, str2, str3) => str1 + str2 + str3,
    );

    expect(service.concatString('TESTE', 'TESTE2', 'TESTE3')).toBe('TESTETESTE2TESTE3');

    expect(service.concatString).toHaveBeenCalled();

    expect(service.concatString).toHaveBeenCalledWith('TESTE', 'TESTE2', 'TESTE3');

    expect(service.concatString).toHaveBeenCalledTimes(1);
  });
});

describe('Testa a requisicao da API', () => {
  service.fetchDogApi = jest.fn();
  afterEach(service.fetchDogApi.mockReset);

  it('Verifica se o Status da API teve sucesso ', async () => {
    service.fetchDogApi.mockResolvedValue('request sucess');

    service.fetchDogApi();

    expect(service.fetchDogApi).toHaveBeenCalled();

    expect(service.fetchDogApi).toHaveBeenCalledTimes(1);

    expect(service.fetchDogApi).toHaveBeenCalledWith();

    await expect(service.fetchDogApi()).resolves.toBe('request sucess');

    expect(service.fetchDogApi).toHaveBeenCalledTimes(2);
  });

  it('Verifica se o Status da API teve erro ', async () => {
    service.fetchDogApi.mockRejectedValue('request failed');

    expect(service.fetchDogApi).toHaveBeenCalledTimes(0);

    await expect(service.fetchDogApi()).rejects.toMatch('request failed');

    expect(service.fetchDogApi).toHaveBeenCalledTimes(1);
  });
});
