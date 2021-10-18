const users = [
  { id: 1, name: 'Mark' },
  { id: 2, name: 'Paul' },
];

const findUserById = (id) =>
  new Promise((resolve, reject) => {
    const result = users.find((user) => user.id === id);

    if (result) {
      return resolve(result);
    }

    return reject(new Error(`User with id ${id} not found.`));
  });

const getUserName = (userId) => findUserById(userId).then((user) => user.name);

getUserName(1).then((user) => console.log(user));

describe('faça um teste que verifique o resultado da função getUserName para o caso em que o usuário é encontrado', () => {
  it('verifica o resultado da função getUserName para o caso em que o usuário é encontrado', async () => {
    try {
      const getName = await getUserName(1);
      expect(getName).toEqual('Mark');
    } catch (error) {
      expect(error).toEqual('User with id 1 not found.');
    }
  });
});

describe('faça um teste que verifique o resultado da função getUserName para o caso em que o usuário nao é encontrado', () => {
  it('verifica o resultado da função getUserName para o caso em que o usuário nao é encontrado', async () => {
    expect.assertions(1);
    try {
      await getUserName(3);
    } catch (error) {
      expect(error.message).toMatch('User with id 3 not found.');
    }
  });
});
