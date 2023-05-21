import styled from "styled-components";

export const ModalBackground = styled.div`
  background-color: rgb(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

export const ModalContainer = styled.article`
  position: fixed;
  top: 15%;
  left: 50%;
  transform: translate(-50%, 50%);
  width: 25rem;
  height: 15rem;
  background-color: #fff;
  color: #000;
  font-family: "Poppins";
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
`;

export const HeadingText = styled.p`
  font-size: 3rem;
  font-weight: 700;
`;

export const SmallText = styled.p`
  font-size: 1rem;
  font-weight: 700;
`;
