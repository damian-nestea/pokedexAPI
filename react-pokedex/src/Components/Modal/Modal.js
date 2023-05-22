import React, { useContext, useEffect, useRef } from "react";
import {
  HeadingText,
  ModalBackground,
  ModalContainer,
  SmallText,
} from "./modalStyle";
import { GlobalContext } from "../../contexts/GlobalContext";

const Modal = () => {
  const context = useContext(GlobalContext);
  const { openModal, setOpenModal, modalMessage } = context;
  let modalRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (modalRef) {
        !modalRef.current.contains(e.target) && setOpenModal(false);
      }
    };
    openModal && document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const HeadingMessage =
    modalMessage === "addPokemon"
      ? "Gotcha!"
      : modalMessage === "removePokemon"
      ? "Oh, no!"
      : null;

  const SmallMessage =
    modalMessage === "addPokemon"
      ? "O Pokémon foi adicionado a sua Pokédex!"
      : modalMessage === "removePokemon"
      ? "O Pokémon foi removido da sua Pokedéx"
      : null;

  if (openModal) {
    return (
      <ModalBackground>
        <ModalContainer ref={modalRef}>
          <HeadingText>{HeadingMessage}</HeadingText>
          <SmallText>{SmallMessage}</SmallText>
        </ModalContainer>
      </ModalBackground>
    );
  }
};

export default Modal;
