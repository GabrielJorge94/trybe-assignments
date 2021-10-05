const { encode, decode } = require('./encodeDecode.js');

describe('verifica funcoes encode e decode', () => {
  it('verifica se encode e funcoes', () => {
    expect(typeof encode).toBe('function');
    expect(typeof decode).toBe('function');
  });
  it('Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;', () => {
    expect(encode('ana')).toBe('1n1');
    expect(encode('ele')).toBe('2l2');
    expect(encode('xixi')).toBe('x3x3');
    expect(encode('ovo')).toBe('4v4');
    expect(encode('uva')).toBe('5v1');
  });
  it('Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, i, o, u , respectivamente;', () => {
    expect(decode('1n1')).toBe('ana');
    expect(decode('2l2')).toBe('ele');
    expect(decode('x3x3')).toBe('xixi');
    expect(decode('4v4')).toBe('ovo');
    expect(decode('5v1')).toBe('uva');
  });
  it('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.', () => {
    expect(encode('ana')).toHaveLength(3);
    expect(encode('ele')).toHaveLength(3);
    expect(encode('xixi')).toHaveLength(4);
    expect(encode('ovo')).toHaveLength(3);
    expect(encode('uva')).toHaveLength(3);
  });
  it('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.', () => {
    expect(decode('1n1')).toHaveLength(3);
    expect(decode('2l2')).toHaveLength(3);
    expect(decode('x3x3')).toHaveLength(4);
    expect(decode('4v4')).toHaveLength(3);
    expect(decode('5v1')).toHaveLength(3);
  });
});
