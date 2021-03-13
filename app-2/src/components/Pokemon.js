import React from 'react';
import AddFavePokemon from './AddFavePokemon';

const Pokemon = ({ addPokemon, pokemon }) => {
  return (
    <div>
      {pokemon.name}
      <AddFavePokemon addPokemon={addPokemon} pokemon={pokemon.name} />
    </div>
  );
};

export default Pokemon;
