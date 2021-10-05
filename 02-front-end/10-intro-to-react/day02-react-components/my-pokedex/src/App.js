import Pokemon from './Components/Pokemon';
import './App.css';
import Header from './Components/Header';

function App() {
  return (
    <section className='container'>
      <Header />
      <article className='pokemon-container'>
        <Pokemon />
      </article>
    </section>
  );
}

export default App;
