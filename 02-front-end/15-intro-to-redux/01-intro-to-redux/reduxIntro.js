const ESTADO_INICIAL = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

const NEXT_COLOR = {
  type: 'NEXT_COLOR',
};

const PREVIOUS_COLOR = {
  type: 'PREVIOUS_COLOR',
};

const RANDOM_COLOR = {
  type: 'RANDOM_COLOR',
};


const reducer = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
    case "NEXT_COLOR":
      return {
        ...state,
        index: state.index === state.colors.length - 1 ? 0 : state.index + 1,
      };
    case "PREVIOUS_COLOR":
      return {
        ...state,
        index: state.index === 0 ? state.colors.length - 1 : state.index - 1 ,
      };
    case "RANDOM_COLOR":
      return {
        ...state,
        colors: [...state.colors, criarCor()],
      };
      
    default:
      return state;
  }
}

const store = Redux.createStore(reducer);

const nextColor = () => {
  store.dispatch(NEXT_COLOR);
  console.log(store.getState());
};

const previousColor = () => {
  store.dispatch(PREVIOUS_COLOR);
  console.log(store.getState());
};

const randomColor = () => {
  store.dispatch(RANDOM_COLOR);
  console.log(store.getState());
};

const nextColorButton = document.getElementById('next');
nextColorButton.addEventListener('click', nextColor);

const previousColorButton = document.getElementById('previous');
previousColorButton.addEventListener('click', previousColor);

const randomColorButton = document.getElementById('random');
randomColorButton.addEventListener('click', randomColor);


store.subscribe(() => {
  const state = store.getState();
  const color = state.colors[state.index];
  const containerEl = document.getElementById('container');
  containerEl.style.backgroundColor = color;
  const colorEl = document.getElementById('value');
  colorEl.innerHTML = color;
});


function criarCor() {
  const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let cor = '#';
  const aleatorio = () => Math.floor(Math.random() * oneChar.length);
  for (let i = 0; i < 6; i += 1) {
      cor += oneChar[aleatorio()];
  }
  return cor;
}