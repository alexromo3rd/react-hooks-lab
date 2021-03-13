import React from 'react';

const AddFavePokemon = ({ addPokemon, pokemon }) => {
  return <button onClick={() => addPokemon(pokemon)}>Add To Favorites</button>;
};

export default AddFavePokemon;
