import React from 'react';
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
        console.log(response)
        setPokemonSearchName(id)
        })
      .catch(function(error){
        console.log(`There was an error:` , error)
      })
    }
  }

  const secondType = () => {
    if(pokemonFullData.types[1] !== undefined){
      let secondTypeValue = pokemonFullData.types[1].type.name
      return(secondTypeValue)
    }else{
      let secondTypeValue = ""
      return(secondTypeValue)
    }  
  }

  const secondAbility = () => {
    if(pokemonFullData.abilities[1] !== undefined){
      let secondAbilityValue = pokemonFullData.abilities[1].ability.name
      return(secondAbilityValue)
    }else{
      let secondTypeValue = ""
      return(secondTypeValue)
    }
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
    if(pokemonSearchName !== ""){
    return(
        <>        
        <div className="m-auto">
          <div>
            <div className="relative mb-3 shadow-md rounded-md"> <input id="input" type="text" onKeyDown={(event)=>inputHandler(event)} className="h-14 w-96 pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none" placeholder="Search pokemon..." />
              <div className="absolute top-4 right-3"> <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i> </div>
            </div> 
            <div className="flex flex-col bg-gray-200 max-w-screen shadow-md py-8 px-10 md:px-8 rounded-md">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
              <div className="m-auto">
                <img className="rounded-full border-4 border-gray-300 h-24 w-24 mx-auto" src={pokemonFullData.sprites.front_default} alt="" />
                <div className="font-medium text-lg text-gray-800 text-center mt-3">{capitalize(pokemonFullData.name)}</div>
                <div className="text-gray-500 mb-3 whitespace-nowrap text-center mt-3">Type: {capitalize(pokemonFullData.types[0].type.name)} {capitalize(secondType())}</div>
                <div className="text-gray-500 mb-3 whitespace-nowrap text-center"></div>

              </div>
                <div className="m-auto flex flex-col text-center md:text-left">
                <div className="font-medium text-lg text-gray-800">Abilities</div>
                <div className="text-gray-500 mb-3 whitespace-nowrap">{capitalize(pokemonFullData.abilities[0].ability.name)}</div>
                <div className="text-gray-500 mb-3 whitespace-nowrap">{capitalize(secondAbility())}</div>
                <div className="font-medium text-lg text-gray-800">Stats</div>
                <div className="text-gray-500 mb-2 whitespace-nowrap">Health: {pokemonFullData.stats[0].base_stat}</div>
                <div className="text-gray-500 mb-2 whitespace-nowrap">Attack: {pokemonFullData.stats[1].base_stat}</div>
                <div className="text-gray-500 mb-2 whitespace-nowrap">Defense: {pokemonFullData.stats[2].base_stat}</div>
                <div className="text-gray-500 mb-2 whitespace-nowrap">Speed: {pokemonFullData.stats[5].base_stat}</div>
                </div>
            </div>
            </div>
            </div>
            <button className="shadow-md mt-3 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" id="random" onClick={(event)=>inputHandler(event)}>Random Pokemon</button>
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
            <button className="shadow-md mt-3 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" id="random" onClick={(event)=>inputHandler(event)}>Random Pokemon</button>
        </div>
      </>
    )
  }
}

export default PokemonSearch;