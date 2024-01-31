import React from "react";
import styles from "./Produto.module.css";
import { useParams } from "react-router-dom";
import Head from "./Head";
const Produto = () => {
  const [produto, setProduto] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const { id } = useParams();
  React.useEffect(() => {
    async function fetchProduto(url) {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setProduto(json);
      } catch (e) {
        setError("Um erro ocorreu!");
      } finally {
        setLoading(false);
      }
    }
    fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [id]);
  if (loading) return <div className="loading"></div>;
  if (error) return <p>{error}</p>;
  if (produto === null) return null;
  return (
    <section className={styles.produto + " animeLeft"}>
      <Head titulo={`Enterprise | ${produto.nome}`} desc={produto.descricao} />
      <div>
        <img src={produto.fotos[0].src} alt={produto.fotos[0].title} />
      </div>
      <div>
        <h1>{produto.nome}</h1>
        <span className={styles.preco}> R$ {produto.preco}</span>
        <p className={styles.descricao}>{produto.descricao}</p>
      </div>
    </section>
  );
};

export default Produto;
