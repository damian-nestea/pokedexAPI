import React from 'react'
import { HeaderContainer , PokemonLogo , HomeButton , PokedexButton } from './headerStyle'
import Logo from '../assets/pokemonLogo.png'

const Header = ( {pagina} ) => {
  return (
    <HeaderContainer>
      <HomeButton>&lt; Todos Pokemons</HomeButton>
      <PokemonLogo src={Logo}/>
      <PokedexButton href='/pokedex'>Pokedex</PokedexButton>

    </HeaderContainer>
  )
}

export default Header