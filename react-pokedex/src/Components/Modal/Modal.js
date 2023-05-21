import React from "react";
import {
  HeadingText,
  ModalBackground,
  ModalContainer,
  SmallText,
} from "./modalStyle";

const Modal = ({ isOpen }) => {
  if (true) {
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
