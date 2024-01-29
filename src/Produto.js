import React from "react";
import { NavLink, Routes,Route, useLocation, useParams } from "react-router-dom";
import ProdutoDescricao from "./ProdutoDescricao";
import ProdutoAvaliacao from "./ProdutoAvaliacao";

const Produto = () => {
  const params = useParams();

  return (
    <div>
      <h1>Produto: {params.id}</h1>
      <nav>
        <NavLink to="descricao">Descricão</NavLink> {""}
        <NavLink to="avaliacao">Avaliação</NavLink>
      </nav>
      <Routes>
          <Route path="descricao" element={<ProdutoDescricao />} />
          <Route path="avaliacao" element={<ProdutoAvaliacao />} />
      </Routes>
    </div>
  );
};

export default Produto;
