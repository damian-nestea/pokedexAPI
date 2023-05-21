import React, { useContext } from "react";
import {
  HeadingText,
  ModalBackground,
  ModalContainer,
  SmallText,
} from "./modalStyle";
import { GlobalContext } from "../../contexts/GlobalContext";

const Modal = () => {
  const context = useContext(GlobalContext);
  const { openModal } = context;
  if (openModal) {
    return (
      <ModalBackground>
        <ModalContainer>
          <HeadingText>Gotcha!</HeadingText>
          <SmallText>O Pokémon foi adicionado a sua Pokédex</SmallText>
        </ModalContainer>
      </ModalBackground>
    );
  }
};

export default Modal;
