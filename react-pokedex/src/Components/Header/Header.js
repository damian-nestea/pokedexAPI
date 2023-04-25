import React from 'react'
import { HeaderContainer , PokemonLogo , HomeButton , PokedexButton } from './headerStyle'
import Logo from '../assets/pokemonLogo.png'
import { GoToPokedexPage, GoToPokemonListPage } from '../../Router/coordinator'
import { useNavigate } from 'react-router-dom'

const Header = ( {pagina} ) => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <HomeButton onClick={()=>{GoToPokemonListPage(navigate)}}>&lt; Todos Pokemons</HomeButton>
      <PokemonLogo src={Logo}/>
      <PokedexButton onClick={()=>{GoToPokedexPage(navigate)}}>Pokedex</PokedexButton>

    </HeaderContainer>
  )
}

export default Header