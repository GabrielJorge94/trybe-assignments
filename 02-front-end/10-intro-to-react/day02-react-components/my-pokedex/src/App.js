import Pokemon from './Components/Pokemon';
import pokemons from './data';
import './App.css';
import Header from './Components/Header';

function App() {
  return (
    <section className= 'container'>
      <Header />
      <Pokemon />
    </section>
  );
}

export default App;
