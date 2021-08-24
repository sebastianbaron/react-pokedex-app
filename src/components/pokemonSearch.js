import React, { useEffect } from 'react';
import P from "../api/pokeApi"
import "../style/main.css"
import capitalize from "../utils/capitalize"

const PokemonSearch = (props) => {

  let {
    pokemonSearchName,
    setPokemonSearchName,
    pokemonFullData,
    setPokemonFullData,
  } = props;

  const setter = (id) => {
    if(id !== pokemonSearchName){
      P.getPokemonByName((id).toString().toLowerCase())
      .then(function(response){
        setPokemonFullData(response)
        setPokemonSearchName(id)
        })
      .catch(function(error){
        console.log(`There was an error:` , error)
      })
    }
  }

  const PokemonIterator = (props) =>{
    let { ability } = props;
    
        return(
            <div className="text-gray-500 mb-2 whitespace-nowrap">
                <h2>{ability}</h2>     
            </div>
        )
    }

  const inputHandler = (event) => {
    const input = document.getElementById("input")
      if(event.keyCode === 13){
        setter(input.value)
      }else if(event.keyCode === undefined){
        input.value = Math.floor(Math.random()*897+1)
        setter(input.value)
      }
   }    

   useEffect(() => {
     if(pokemonFullData !== ""){
     window.localStorage.setItem("pokemonFullData", JSON.stringify(pokemonFullData))}    
   }, [pokemonFullData])

   let LocalStoragePokemonData = JSON.parse(localStorage.getItem("pokemonFullData"))
   
    if(LocalStoragePokemonData && LocalStoragePokemonData !== undefined){
    return(
        <>        
        <div className="m-auto">
          <div>
            <div className="relative mb-3 shadow-md rounded-md"> <input id="input" type="text" onKeyDown={(event)=>inputHandler(event)} className="h-14 w-96 pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none" placeholder="Search pokemon..." />
              <div className="absolute top-4 right-3"> <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i> </div>
            </div> 
            <div className="flex flex-col bg-gray-200 max-w-screen shadow-md py-8 px-10 md:px-8 rounded-md">
            <div className="flex flex-row gap-6">
              <div className="m-auto">
                <img className="rounded-full border-4 border-gray-300 h-24 w-24 mx-auto" src={LocalStoragePokemonData.sprites.front_default} alt="" />
                <div className="color-pink font-medium text-xl text-gray-800 text-center mt-3">{capitalize(LocalStoragePokemonData.name)}</div>
                <h1 className="font-medium text-lg mt-3 text-gray-800 text-center">Types</h1>
                <div className="text-center mt-4">
                {LocalStoragePokemonData.types && LocalStoragePokemonData.types.map((types) => <PokemonIterator key={types.index} ability={types.type.name}/>)}
                </div>
               </div>
                <div className="m-auto flex flex-col text-left">
                <h1 className="font-medium text-lg text-gray-800">Abilities</h1>
                {LocalStoragePokemonData.abilities && LocalStoragePokemonData.abilities.map((abilities) => <PokemonIterator key={abilities.index} ability={abilities.ability.name}/>)}
                <h1 className="font-medium text-lg text-gray-800">Stats</h1>
                  <div className="text-gray-500 mb-2 whitespace-nowrap">Health: {LocalStoragePokemonData.stats[0].base_stat}</div>
                  <div className="text-gray-500 mb-2 whitespace-nowrap">Attack: {LocalStoragePokemonData.stats[1].base_stat}</div>
                  <div className="text-gray-500 mb-2 whitespace-nowrap">Defense: {LocalStoragePokemonData.stats[2].base_stat}</div>
                  <div className="text-gray-500 mb-2 whitespace-nowrap">Speed: {LocalStoragePokemonData.stats[5].base_stat}</div>
                </div>
            </div>
            </div>
            </div>
            <div className="flex flex-row justify-between">
            <button className="shadow-md mt-3 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" id="random" onClick={(event)=>inputHandler(event)}>Random Pokemon</button>
            </div>
        </div>
        </>
    )
  }else{
    return(
      <>
      <div className="m-auto">
          <div>
            <div className="relative mb-3 shadow-md rounded-md"> <input id="input" type="text" onKeyDown={(event)=>inputHandler(event)} className="h-14 w-96 pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none" placeholder="Search pokemon..." />
              <div className="absolute top-4 right-3"> <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i> </div>
            </div> 
            <div className="flex flex-col bg-gray-200 max-w-screen shadow-md py-8 px-10 md:px-8 rounded-md">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
              <p className="m-auto">No pokemon selected</p>
            </div>
            </div>
            </div>
            <div className="flex flex-row justify-between">
            <button className="shadow-md mt-3 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" id="random" onClick={(event)=>inputHandler(event)}>Random Pokemon</button>
            </div>
        </div>
      </>
    )
  }
}

export default PokemonSearch;