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
  const Type = types.map((type) => {
    switch (type.type.name) {
      case "normal":
        return <TypeImage src={NormalType} alt="Pokemon normal" />;
      case "grass":
        return <TypeImage src={GrassType} alt="Pokemon grass" />;
      case "poison":
        return <TypeImage src={PoisonType} alt="Pokemon poison" />;
      case "fire":
        return <TypeImage src={FireType} alt="Pokemon fire" />;
      case "bug":
        return <TypeImage src={BugType} alt="Pokemon bug" />;
      case "flying":
        return <TypeImage src={FlyingType} alt="Pokemon flying" />;
      case "water":
        return <TypeImage src={WaterType} alt="Pokemon water" />;
      default:
        return null;
    }
  });

  return <TypeContainer page={page}>{Type}</TypeContainer>;
};

export default PokemonTypes;
