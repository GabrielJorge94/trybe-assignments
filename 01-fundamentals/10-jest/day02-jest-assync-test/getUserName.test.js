const { get } = require('lodash');

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
  it('verifica o resultado da função getUserName para o caso em que o usuário é encontrado', () => {
    getUserName(1).then((user) => {
      expect(user).toEqual('Mark');
    });
  });
});

describe('faça um teste que verifique o resultado da função getUserName para o caso em que o usuário nao é encontrado', ()=>{
  it('verifica o resultado da função getUserName para o caso em que o usuário nao é encontrado', () =>{
    expect.assertions(1);
    return getUserName(3).catch((error) => {
      expect(error.message).toMatch('User with id 3 not found.')
    })
  })
})
