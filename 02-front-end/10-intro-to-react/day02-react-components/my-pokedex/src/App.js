import Pokemon from './Components/Pokemon';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <section className='container'>
      <Header />
      <article className='pokemon-container'>
        <Pokemon />
      </article>
      <Footer />
    </section>
  );
}

export default App;
