import React from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Sobre from "./Sobre";
import Header from "./Header";
import NotFound from "./NotFound";
import Login from "./Login";
import Produto from "./Produto";

const App = () => {
  return (
  <BrowserRouter>
  <Header/>
  <Routes>
    <Route path="login" element={<Login/>}/>
    <Route path="/" element={<Home />}/>
    <Route path="sobre" element={<Sobre />}/>
    <Route path="produto/:id/*" element={<Produto />}/>
    <Route path="*" element={<NotFound />}/>


  </Routes>
  </BrowserRouter>
  );
};

export default App;
