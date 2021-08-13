import React, { useState } from 'react';
import './App.css';
import PokemonSearch from './components/pokemonSearch'
import "./style/main.css"

function App() {

  let [pokemonSearchName, setPokemonSearchName] = useState("")

  return (
    <>
    <div className="min-h-screen flex flex-col bg-gray-100">
    <PokemonSearch 
    pokemonSearchName={pokemonSearchName} 
    setPokemonSearchName={setPokemonSearchName}
    />
    </div>
    </>
  );
}

export default App;
