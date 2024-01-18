import React from "react";
const App = () => {
  const luana = {
    cliente: "Luana",
    idade: 27,
    compras: [
      { nome: "Notebook", preco: 2499 },
      { nome: "Geladeira", preco: 3000 },
      { nome: "Smartphone", preco: 1500 },
    ],
    ativa: true,
  };
  const mario = {
    cliente: "Mario",
    idade: 31,
    compras: [
      { nome: "Notebook", preco: 2499 },
      { nome: "Geladeira", preco: 3000 },
      { nome: "Smartphone", preco: 1500 },
      { nome: "TV", preco: 3600 },
    ],
    ativa: false,
  };
  const dados = mario;
  const total = dados.compras.reduce((soma, item) => soma + item.preco, 0);
  return (
    <>
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p>
        Situação: {""}
        <span style={{ color: dados.ativa ? "green" : "red" }}>
          {dados.ativa ? "Ativa" : "Inativa"}
        </span>
      </p>
      <p>Total gasto: R$ {total}</p>
      <p>{total > 10000 && "Você está gastando muito"}</p>
    </> 
  );
};

export default App;
