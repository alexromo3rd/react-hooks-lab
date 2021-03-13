import React from 'react';
import Pokemon from './Pokemon';

const PokemonList = ({ list, addPokemon }) => {
  return (
    <div>
      {list.map((pokemon, index) => {
        return (
          <Pokemon key={index} pokemon={pokemon} addPokemon={addPokemon} />
        );
      })}
    </div>
  );
};

export default PokemonList;
