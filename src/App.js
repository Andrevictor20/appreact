import React from "react";
import Produto from "./Produto";
// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo
 

const App = () => {
 function handleClick(event){
 }
  const [produto, setProduto] = React.useState(null);
  React.useEffect(()=>{
    const produtoLocal=window.localStorage.getItem("produto");
    if(produtoLocal!==null)setProduto(produtoLocal)
    
  },[])
  React.useEffect(()=>{
    if(produto!==null)
    window.localStorage.setItem("produto",produto)
  },[produto])
  function handleClick(event){
    setProduto(event.target.innerText);
  }

  return (
  <>
  <h1>Preferência: {produto}</h1>
  <button onClick={handleClick} style={{margin:"0.5rem"}}>notebook</button>
  <button onClick={handleClick} style={{margin:"0.5rem"}}>smartphone</button>
  <Produto produto ={produto}/>
  </>
  );
};

export default App;
