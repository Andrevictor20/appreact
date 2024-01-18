import React from "react";
// Organize os produtos como mostrado no vídeo
// Mostre apenas produtos que forem mais caros que R$ 1500
const produtos = [
  {
    id: 1,
    nome: "Smartphone",
    preco: 2000,
    cores: ["#29d8d5", "#252a34", "#fc3766"],
  },
  {
    id: 2,
    nome: "Notebook",
    preco: 3000,
    cores: ["#ffd045", "#d4394b", "#f37c59"],
  },
  {
    id: 3,
    nome: "Tablet",
    preco: 1500,
    cores: ["#365069", "#47c1c8", "#f95786"],
  },
];

const App = () => {
  const dados = produtos.filter(({ preco }) => preco > 1500);
  return (
    <section>
      <h1>Produtos</h1>
      {dados.map(({ id, nome, preco, cores }) => (
        <div key={id}>
          <h2>{nome}</h2>
          <p>Preço: R${preco}</p>
          <ul>
          <p>#Cores Disponíveis:</p>
            {cores.map((cor) => (
              <li style={{ backgroundColor: cor, color: "white" }} key={cor}>
                {cor}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default App;
