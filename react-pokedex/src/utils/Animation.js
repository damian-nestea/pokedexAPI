import { keyframes } from "styled-components";

export const fadeIn = keyframes`
  0%{
    opacity: 0;
    transform: translate(0% , -30%);
  }
  100%{
    opacity: 1;
    transform: translate(0% , 0%);
  }
`;

export const fadeInHome = keyframes`
  0%{
    opacity: 0;
    transform: translate(0% , 400%) scale(200%);
  }
  100%{
    opacity: 1;
    transform: translate(0% , 0%);
  }
`;

export const fadeInAllPokemons = keyframes`
  0%{
    opacity: 0;
    transform: translate(0% , -200%) scaleY(0);
  }
  100%{
    opacity: 1;
    transform: translate(0% , 0%);
  }
`;

export const fadeInDetails = keyframes`
  0%{
    opacity: 0;
    transform: translate(-50% , 0%);
  }
  100%{
    opacity: 0.5;
    transform: translate(0% , 0%);
  }
`;

export const fadeInModal = keyframes`
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`;
