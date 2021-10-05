import React from 'react';
import pokemons from '../data';
import PokemonImage from './PokemonImage';

class Pokemon extends React.Component {
  render() {
    return pokemons.map((pokemon) => (
        <div key={pokemon.id} className='poke-card'>
          <div>
            <p>{pokemon.name}</p>
            <p>{pokemon.type}</p>
            <p>
              {pokemon.averageWeight.value}{' '}
              {pokemon.averageWeight.measurementUnit}
            </p>
          </div>
          <div>
            <PokemonImage
              source={pokemon.image}
              alternativeText='Pokemon avatar'
            />
          </div>
        </div>
    ));
  }
}

export default Pokemon;
