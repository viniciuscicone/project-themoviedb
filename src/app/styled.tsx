"use client";
import styled from "styled-components";
import sheBackGround from "../assets/2sheBackGround.jpg";

export const Header = styled.header`
  text-align: center;
  height: 10vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #001e3c;
  color: white;
  font-weight: 200;
  font-size: 3em;
  box-shadow: inset 0 0 1em black;
  font-family: "Source Sans Pro", Arial, sans-serif;

`;


export const Main = styled.main`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Checks = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ContainerCheck = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #79bcff;
  border-radius: 10px;
  cursor: pointer;
  margin: 10px;
  padding: 10px;
`;
export const SenctionFind = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
`;
export const input = {
  width: "95%",
  height: "80%",
  margin: "10px",
  color: "primary.main",
  bgcolor: "#40658a60",
  textColor: "white",
};

export const Section1 = styled.section`
  
  color: #64859e;
  text-align: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0.5vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-position: fixed;
  background-size: cover; /* Garante que a imagem cubra todo o fundo */
  position: relative; /* Necessário para o pseudo-elemento */

  /* Adiciona um pseudo-elemento para o efeito de blur */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${sheBackGround.src});
    background-position: fixed;
    background-size: cover;
    z-index: -1; /* Coloca o pseudo-elemento atrás do conteúdo */
  }

  div {
    margin: 4px;
  }

  h4 {
    margin: 6px;
  }
`;

export const Section3 = styled.section`
  text-align: center;
  height: 10%;
  width: 100%;
  padding: 0.5vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Footer = styled.footer`
  text-align: center;
  background-color: #001e3c;
  color: white;
  height: 10vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
