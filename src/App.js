import React from "react";
import styled from "styled-components";

const Titulo = styled.h1`
  font-size: 2rem;
  color: blue;
`;

const Paragrafo = styled.p`
  font-size: 1.5rem;
  color: red;
`

const App = () => {
  return (
    <div>
      <Titulo>Meu App</Titulo>
      <Paragrafo>Paragrafo</Paragrafo>
    </div>
  );
};

export default App;
