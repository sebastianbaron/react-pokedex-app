import React, { useState } from 'react';
import P from "../api/pokeApi"
import "../style/main.css"
import capitalize from "../utils/capitalize"

const PokemonSearch = () => {

  let [pokemonSearchName, setPokemonSearchName] = useState("")
  let [pokemonImage, setPokemonImage] = useState("")
  let [pokemonName, setPokemonName] = useState("")
  let [pokemonHp, setPokemonHp] = useState("")
  let [pokemonAttack, setPokemonAttack] = useState("")
  let [pokemonDefense, setPokemonDefense] = useState("")
  let [pokemonSpeed, setPokemonSpeed] = useState("")
  let [pokemonType, setPokemonType] = useState("")
  let [pokemonSecondType, setPokemonSecondType] = useState("")
   

  const inputHandler = (event) => {
    const input = document.getElementById("input")
      if(event.keyCode === 13){
        if(input.value !== pokemonSearchName){
          P.getPokemonByName((input.value).toString().toLowerCase())
          .then(function(response){
            console.log(response)
            setPokemonSearchName(input.value)
            setPokemonImage(response.sprites.front_default)
            setPokemonName(response.name)
            setPokemonHp(response.stats[0].base_stat)
            setPokemonAttack(response.stats[1].base_stat)
            setPokemonDefense(response.stats[2].base_stat)
            setPokemonSpeed(response.stats[5].base_stat)
            setPokemonType(response.types[0].type.name)
              if(response.types[1] !== undefined){
                setPokemonSecondType(response.types[1].type.name)
              }
            })
          .catch(function(error){
            console.log(`There was an error:` , error)
          })
        }
      }
   }    

    return(
        <>        
        <div className="m-auto">
          <div>
            <div className="relative mb-3"> <input id="input" type="text" onKeyDown={(event)=>inputHandler(event)} className="h-14 w-96 pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none" placeholder="Search pokemon..." />
              <div className="absolute top-4 right-3"> <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i> </div>
            </div> 
            <div className="flex flex-col bg-gray-200 max-w-screen shadow-md py-8 px-10 md:px-8 rounded-md">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
              <div>
                <img className="rounded-full border-4 border-gray-300 h-24 w-24 mx-auto" src={pokemonImage} alt="" />
                <div className="font-medium text-lg text-gray-800 text-center mt-3">Abilities</div>
                <div className="text-gray-500 mb-3 whitespace-nowrap text-center mt-3">{capitalize(pokemonType)}</div>
                <div className="text-gray-500 mb-3 whitespace-nowrap text-center">{capitalize(pokemonType)}</div>

              </div>
                <div className="flex flex-col text-center md:text-left">
                <div className="font-medium text-lg text-gray-800">{capitalize(pokemonName)}</div>
                <div className="text-gray-500 mb-3 whitespace-nowrap">Type: {capitalize(pokemonType)}</div>
                <div className="text-gray-500 mb-3 whitespace-nowrap">Second Type:{capitalize(pokemonSecondType)}</div>
                <div className="font-medium text-lg text-gray-800">Stats</div>
                <div className="text-gray-500 mb-2 whitespace-nowrap">Health: {pokemonHp}</div>
                <div className="text-gray-500 mb-2 whitespace-nowrap">Attack: {pokemonAttack}</div>
                <div className="text-gray-500 mb-2 whitespace-nowrap">Defense: {pokemonDefense}</div>
                <div className="text-gray-500 mb-2 whitespace-nowrap">Speed: {pokemonSpeed}</div>
                </div>
            </div>
            </div>
            </div>
        </div>

        </>
    )
}

export default PokemonSearch;