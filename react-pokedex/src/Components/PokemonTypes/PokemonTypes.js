import React from "react";
import { TypeContainer, TypeImage } from "./pokemonTypesStyle";
import PoisonType from "../assets/poison.png";
import NormalType from "../assets/normal.png";
import FireType from "../assets/fire.png";
import BugType from "../assets/bug.png";
import FlyingType from "../assets/flying.png";
import GrassType from "../assets/grass.png";
import WaterType from "../assets/normal.png";

const PokemonTypes = ({ types, page }) => {
  const Type = types.map((type, index) => {
    switch (type.type.name) {
      case "normal":
        return <TypeImage key={index} src={NormalType} alt="Pokemon normal" />;
      case "grass":
        return <TypeImage key={index} src={GrassType} alt="Pokemon grass" />;
      case "poison":
        return <TypeImage key={index} src={PoisonType} alt="Pokemon poison" />;
      case "fire":
        return <TypeImage key={index} src={FireType} alt="Pokemon fire" />;
      case "bug":
        return <TypeImage key={index} src={BugType} alt="Pokemon bug" />;
      case "flying":
        return <TypeImage key={index} src={FlyingType} alt="Pokemon flying" />;
      case "water":
        return <TypeImage key={index} src={WaterType} alt="Pokemon water" />;
      default:
        return null;
    }
  });

  return <TypeContainer page={page}>{Type}</TypeContainer>;
};

export default PokemonTypes;
