import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;}
.producto-seccion {
    margin-top: 70px;
    margin-bottom: 40px;
}
`;

export const MainStyles = styled.h1`
  /* background-color: #000; */
`;

export const ProductStyle = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 38px;
  margin-top: 20px;
  justify-content: center;
  .card {
    /* border: 1px solid black; */
    width: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 1px 1px 15px #11476868;
    border-radius: 5px;
    img {
      width: 100%;
    }
    .boton-agregar {
      padding: 10px 24px;
      background-color: #0d77b8;
      
      text-decoration: none;
      color: white;
      margin-top: 10px;
      border-radius: 8px;
    }
  }
`;