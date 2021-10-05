import './App.css';
// Crie uma lista de tarefas simples seguindo os passos abaixo:

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

// por fim, crie uma array de compromissos e use a função map para que cada item do array apareça, como um item de lista, no seu componente App .
function App() {
  const tasks = ['aula', 'exercício', 'mentoria','repete']
  return (tasks.map(task => Task(task)));
}

export default App;
