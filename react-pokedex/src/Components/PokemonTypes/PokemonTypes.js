import React from "react";
import { TypeContainer, TypeImage } from "./pokemonTypesStyle";
import PoisonType from '../assets/poison.png'
import NormalType from '../assets/normal.png'
import FireType from '../assets/fire.png'
import BugType from '../assets/bug.png'
import FlyingType from '../assets/flying.png'
import GrassType from '../assets/grass.png'
import WaterType from '../assets/normal.png'

const PokemonTypes = ({types}) => {
  console.log(types)
  const Type = types.map((type,index) => {
    console.log(type.type.name)
    switch(type.type.name){
      case "normal":
        return <TypeImage src={NormalType} alt="Pokemon normal"/>
      case "grass":
        return <TypeImage src={GrassType} alt="Pokemon grass"/>
    }
  })
  
  return (
    <TypeContainer>
      {Type}
    </TypeContainer>
  );
};

export default PokemonTypes;
