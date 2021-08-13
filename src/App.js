import React, { useState } from 'react';
import './App.css';
import PokemonSearch from './components/pokemonSearch';
import "./style/main.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

function App() {

  let [pokemonSearchName, setPokemonSearchName] = useState("")
  let [pokemonImage, setPokemonImage] = useState("")
  let [pokemonName, setPokemonName] = useState("")
  let [pokemonHp, setPokemonHp] = useState("")
  let [pokemonAttack, setPokemonAttack] = useState("")
  let [pokemonDefense, setPokemonDefense] = useState("")
  let [pokemonSpeed, setPokemonSpeed] = useState("")
  let [pokemonType, setPokemonType] = useState("")
  let [pokemonSecondType, setPokemonSecondType] = useState("")


  return (
    <>
    <div className="min-h-screen flex flex-col bg-gray-100">

    <PokemonSearch
    pokemonSearchName={pokemonSearchName}
    setPokemonSearchName={setPokemonSearchName}
    pokemonImage={pokemonImage}
    setPokemonImage={setPokemonImage}
    pokemonName={pokemonName}
    setPokemonName={setPokemonName}
    pokemonHp={pokemonHp}
    setPokemonHp={setPokemonHp}
    pokemonAttack={pokemonAttack}
    setPokemonAttack={setPokemonAttack}
    pokemonDefense={pokemonDefense}
    setPokemonDefense={setPokemonDefense}
    pokemonSpeed={pokemonSpeed}
    setPokemonSpeed={setPokemonSpeed}
    pokemonType={pokemonType}
    setPokemonType={setPokemonType}
    pokemonSecondType={pokemonSecondType}
    setPokemonSecondType={setPokemonSecondType} 
    />
    {/* <GetRandomPokemon 
    pokemonSearchName={pokemonSearchName} 
    setPokemonSearchName={setPokemonSearchName}
    setPokemonImage={setPokemonImage}
    setPokemonName={setPokemonName}
    setPokemonHp={setPokemonHp}
    setPokemonAttack={setPokemonAttack}
    setPokemonDefense={setPokemonDefense}
    setPokemonSpeed={setPokemonSpeed}
    setPokemonType={setPokemonType}
    setPokemonSecondType={setPokemonSecondType}
    /> */}
    </div>
    </>
  );
}

export default App; 
