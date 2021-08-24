import React, { useState } from 'react';
import './App.css';
import PokemonSearch from './components/pokemonSearch';
import "./style/main.css";

function App() {

  let [pokemonSearchName, setPokemonSearchName] = useState("")
  let [pokemonFullData, setPokemonFullData] = useState("")


  return (
      <>
        <div className="min-h-screen flex flex-col bg-gray-100"> 

  return (

      <>
        <div className="min-h-screen flex flex-col bg-gray-100"> 
              <PokemonSearch
                pokemonSearchName={pokemonSearchName}
                setPokemonSearchName={setPokemonSearchName}
                pokemonFullData={pokemonFullData}
                setPokemonFullData={setPokemonFullData}
              />
        </div>
      </>

        </div>
      </>
  );
}

export default App; 
