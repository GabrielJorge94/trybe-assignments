const randomNumber = require('./exercise1');

let { generateRandomNumber } = require('./exercise1');

describe('Utilizando o mock, defina o retorno padrão como 10. Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.', () => {
  const mockRandom = jest.spyOn(randomNumber, 'generateRandomNumber');
  mockRandom.mockReturnValue(10);
  it('Utilizando o mock, defina o retorno padrão como 10', () => {
    expect(mockRandom()).toBe(10);
  });
  it('Teste se a função foi chamada', () => {
    expect(mockRandom).toHaveBeenCalled();
  });
  it('Teste quantas vezes foi chamada', () => {
    expect(mockRandom).toHaveBeenCalledTimes(1);
  });
});
