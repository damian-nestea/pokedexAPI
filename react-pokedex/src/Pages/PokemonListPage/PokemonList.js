import React from 'react'
import { ListContainer } from './pokemonListStyle'
import PokemonCard from '../../Components/PokemonCard/PokemonCard'

const PokemonList = () => {
  return (
    <ListContainer>  
      PokemonList
      <PokemonCard />
    </ListContainer>
  )
}

export default PokemonList