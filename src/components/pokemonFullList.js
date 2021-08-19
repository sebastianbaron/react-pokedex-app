import React from 'react';
import P from "../api/pokeApi";
import { Link } from "react-router-dom"

const PokemonListItem = (props) =>{
    let{ name, link, index } = props;


    return(
            <Link to={link} className="flex flex-row">
                <div className="select-none cursor-pointer flex flex-1 items-center p-4">
                    <div className="flex-1 pl-1 mr-16">
                        <div>
                            ID: {index}
                        </div>
                        <div className="font-medium dark:text-white">
                            {name}
                        </div>
                        <div className="text-gray-600 dark:text-gray-200 text-sm">
                            {link}
                        </div>
                        <div>
                            <img id="" src="" alt="" />
                        </div>
                    </div>
                    
                </div>
            </Link>    
    )
}

const PokemonFullList = (props) => {
    let { pokemonFullList, setPokemonFullList } = props;


    P.getPokemonsList()
    .then(function(response){
        console.log(response)
        setPokemonFullList(response)
    })
    .catch(function(error){
        console.log("Error :" + error)
    })
        return(
            <div className="container flex flex-col mx-auto w-full items-center justify-center bg-white dark:bg-gray-800 rounded-lg shadow">
                <ul className="flex flex-col divide divide-y">
                    {pokemonFullList.results && pokemonFullList.results.map((results, index)=> <PokemonListItem name={results.name} link={results.url} key={index} index={index} /> )}
                </ul>
            </div>

        )

}

export default PokemonFullList;
