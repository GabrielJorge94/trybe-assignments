const { searchEmployee, professionalBoard } = require('./script');

describe('Testa funcao searchEmployee', () => {
  it('searchEmployee e uma function', () => {
    expect(typeof searchEmployee).toBe('function');
  });
  it('verifica se ao passar o id: 4678-2 e o detail: firstName a funcao retorna o esperado', () => {
    expect(searchEmployee('4678-2', 'firstName')).toBe('Paul');
  });
  it('verifica se ao passar o id: 4678-2 e o detail: lastName a funcao retorna o esperado', () => {
    expect(searchEmployee('4678-2', 'lastName')).toBe('Dodds');
  });
  it('verifica se ao passar o id: 4678-2 e o detail: specialities a funcao retorna o esperado', () => {
    expect(searchEmployee('4678-2', 'specialities')).toEqual(['Backend']);
  });
  it('Caso o id não conste no quadro de funcionários, sua função deve retornar um erro', () => {
    expect(() => {
      searchEmployee('1256-8', 'specialities');
    }).toThrow();
  });
  it('Caso o id não conste no quadro de funcionários, sua função deve retornar o erro ID não identificada', () => {
    expect(() => {
      searchEmployee('1256-8', 'specialities');
    }).toThrowError(new Error('ID não identificada'));
  });
  it('Caso a especialidade não conste no quadro de funcionários, sua função deve retornar um erro', () => {
    expect(() => {
      searchEmployee('4678-2', 'CodeClean');
    }).toThrow();
  });
  it('Caso o especialidade não conste no quadro de funcionários, sua função deve retornar o erro Informação indisponível', () => {
    expect(() => {
      searchEmployee('4678-2', 'CodeClean');
    }).toThrowError(new Error('Informação indisponível'));
  });
});
