const ESTADO_INICIAL_1 = {
  nome: 'Rodrigo',
  sobrenome: 'Santos da Silva',
  endereco: 'Rua Soldado Mathias, 765',
  cidade: 'Belo Horizonte',
};

const ESTADO_INICIAL_2 = {
  nome: 'Bruna',
  sobrenome: 'Santana Oliveira',
  endereco: 'Rua Holanda, 332',
  cidade: 'São Paulo',
};

const CHANGE_NAME = {
  type: 'CHANGE_NAME',
}

const meuPrimeiroReducer = (state = ESTADO_INICIAL_1, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return {
        ...state,
        nome: 'Paula',
        sobrenome: 'Silva',
      };
    default:
      return state;
  }
};

const meuSegundoReducer = (state = ESTADO_INICIAL_2, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return {
        ...state,
        nome: 'Joao',
        sobrenome: 'Silva',
      };
    default:
      return state;
  }
};

const combinedReducer = Redux.combineReducers({
  meuPrimeiroReducer,
  meuSegundoReducer
});

const store = Redux.createStore(combinedReducer);

store.subscribe(() => {
  const nome1El = document.getElementById('nome-1');
  const sobrenome1El = document.getElementById('sobrenome-1');
  nome1El.innerHTML = store.getState().meuPrimeiroReducer.nome;
  sobrenome1El.innerHTML = store.getState().meuPrimeiroReducer.sobrenome;

  const nome2El = document.getElementById('nome-2');
  const sobrenome2El = document.getElementById('sobrenome-2');
  nome2El.innerHTML = store.getState().meuSegundoReducer.nome;
  sobrenome2El.innerHTML = store.getState().meuSegundoReducer.sobrenome;
});


window.onload = () => {
  setTimeout(() => {
    store.dispatch(CHANGE_NAME);
    console.log(store.getState());
  }, 3000);
};