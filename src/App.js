import React, { useState } from 'react';
import './App.css';
import PokemonSearch from './components/pokemonSearch';
import PokemonFullList from "./components/pokemonFullList";

import "./style/main.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {

  let [pokemonSearchName, setPokemonSearchName] = useState("")
  let [pokemonFullData, setPokemonFullData] = useState("")
  let [pokemonFullList, setPokemonFullList] = useState([])

  return (
    <Router>
      <>
        <div className="min-h-screen flex flex-col bg-gray-100"> 
          <Switch>
            <Route path="/List">
              <PokemonFullList
                pokemonFullList={pokemonFullList}
                setPokemonFullList={setPokemonFullList} 
              />
            </Route>
            <Route path="/">
              <PokemonSearch
                pokemonSearchName={pokemonSearchName}
                setPokemonSearchName={setPokemonSearchName}
                pokemonFullData={pokemonFullData}
                setPokemonFullData={setPokemonFullData}
              />
            </Route>
          </Switch>
        </div>
      </>
    </Router>
  );
}

export default App; 
