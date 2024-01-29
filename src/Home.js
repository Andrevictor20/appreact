import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Project-React | Home</title>
        <meta name="description" content="Conteúdo da Home"/>
      </Helmet>
      <h1>Home</h1>
      <p>Conteúdo da Home</p>
      <Link to="produto/notebook">Notebook</Link>{" "}
      <Link to="produto/smartphone">Smartphone  </Link>
    </div>
  );
};

export default Home;
