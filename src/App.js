import React from "react";
import Home from "./Home";
import Produtos from "./Produtos";
import Header from "./Header";

const App = () => {
  let Pagina;
  const { pathname } = window.location;
  if (pathname === "/produtos") {
    Pagina = Produtos;
  } else {
    Pagina = Home;
  }
  return (
    <>
      <Header />
      <Pagina />
    </>
  );
};

export default App;
