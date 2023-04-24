import React from 'react'
import { ListContainer , TituloPokemonList } from './pokemonListStyle'
import PokemonCard from '../../Components/PokemonCard/PokemonCard'
import { Titulo } from '../PokedexPage/pokedexStyle'

const PokemonList = () => {
  return (
    <ListContainer>  
      <TituloPokemonList>Todos Pokémons</TituloPokemonList>
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
    </ListContainer>
  )
}

export default PokemonList