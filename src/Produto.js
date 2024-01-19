import React from "react";

const Produto = ({ nome, especificacao }) => {
  return (
    <div style={{ border: "1px solid", margin: "1rem 0", padding: "1rem" }}>
      <p>{nome}</p>
      <ul>
        {especificacao.map((especificacao) => (
          <li key={especificacao}>
            {especificacao}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Produto;
