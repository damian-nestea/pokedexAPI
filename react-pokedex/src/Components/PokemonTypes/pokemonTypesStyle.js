import styled from "styled-components";

export const TypeContainer = styled.div`
  height: 1.6rem;
  ${({ page }) => page === "detailsPage" && "height: 2.2rem;"}
  @media (max-width:500px) {
    height: 1.5rem;
  }
`;

export const TypeImage = styled.img`
  height: 100%;
  margin-right: 0.2rem;
  transition: 0.8s;
  :hover {
    opacity: 0.3;
  }
`;
