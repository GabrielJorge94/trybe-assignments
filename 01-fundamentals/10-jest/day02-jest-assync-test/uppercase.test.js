const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

test('verifique a chamada do callback de uma função uppercase , que transforma as letras de uma palavra em letras maiúsculas.', (done) => {
  uppercase('ola', (result) => {
    try {
      expect(result).toBe('OLA');
      done();
    } catch (error) {
      done(error);
    }
  });
});
