import React from "react";
import { BrowserRouter,Routes,Route} from "react-router-dom";
import Produtos from "./Components/Produtos";

const App = () => {
  return (
  <>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Produtos/>} />

    </Routes>
  </BrowserRouter>
  </>
  );
};

export default App;
