import React from 'react';
import './App.css';
import PokemonSearch from './components/pokemonSearch'
import "./style/main.css"

function App() {

  return (
    <>
    <div className="min-h-screen flex flex-col bg-gray-100">
    <PokemonSearch />
    </div>
    </>
  );
}

export default App;
