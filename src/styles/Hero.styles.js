import styled from "styled-components";

export const HeroStyle = styled.div`
  background-image: url("https://res.cloudinary.com/workshop-principe/image/upload/v1637334495/Rectangle_1_xxnt59.png");
  background-repeat: no-repeat;
  height: 150px;
  width: 100%;
  background-size: contain;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 786px) {
    background-image: url("https://res.cloudinary.com/workshop-principe/image/upload/v1637333891/banner_it0xng.png");
    height: 200px;
    width: 79.5vw;
  }
`;
export const HeroTitulo = styled.h2`
  font-weight: 800;
  color: #fffe;
`;
