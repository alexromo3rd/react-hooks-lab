import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonList from './components/PokemonList';
import './App.css';

const App = () => {
  const [pokeList, setPokeList] = useState([]);
  const [favePokeList, setFavePokeList] = useState([]);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon').then((res) => {
      setPokeList(res.data.results);
    });
  }, []);

  function addPokemonToFave(pokemon) {
    setFavePokeList(() => [...favePokeList, pokemon]);
  }

  return (
    <div className='App'>
      <PokemonList list={pokeList} addPokemon={addPokemonToFave} />
      <br />
      <h2>Favorite Pokemon</h2>
      {favePokeList.map((pokemon) => {
        return <p>{pokemon}</p>;
      })}
    </div>
  );
};

export default App;
