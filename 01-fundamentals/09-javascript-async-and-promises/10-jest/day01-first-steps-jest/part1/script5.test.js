const { obj1, obj2, obj3 } = require('./script5');

// Compare dois objetos para verificar se são idênticos ou não

describe('Compare dois objetos', () => {
  it('Compare dois objetos para verificar se são idênticos', () => {
    expect(obj1).toEqual(obj2);
  });
  it('Compare dois objetos para verificar se são diferentes', () => {
    expect(obj1).not.toEqual(obj3);
  });
});
