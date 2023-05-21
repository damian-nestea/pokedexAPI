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
  const { openModal, setOpenModal } = context;
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
  if (openModal) {
    return (
      <ModalBackground>
        <ModalContainer ref={modalRef}>
          <HeadingText>Gotcha!</HeadingText>
          <SmallText>O Pokémon foi adicionado a sua Pokédex</SmallText>
        </ModalContainer>
      </ModalBackground>
    );
  }
};

export default Modal;
