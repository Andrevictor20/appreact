import React from "react";
import Input from "./Forms/Input";
import Select from "./Forms/Select";
import Radio from "./Forms/Radio";
import Checkbox from "./Forms/Checkbox";

const App = () => {
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [produto, setProduto] = React.useState("");
  const [cor, setCor] = React.useState("");
  const [carro, setCarro] = React.useState([]);
  const [termos, setTermos] = React.useState([]);
  if(termos.length>0){
    console.log("termos aceitos")
  }

  return (
    <form>
      <h3>Termos</h3>
      <Checkbox
        options={["Li e aceito os termos de uso"]}
        value={termos}
        setValue={setTermos}
      />
      <h3>Selecione o(s) seu(s) carro</h3>
      <Checkbox
        options={["polo", "onix", "argo", "208"]}
        value={carro}
        setValue={setCarro}
      />
      <h3>Selecione sua cor favorita</h3>
      <Radio
        options={["verde", "azul", "vermelho"]}
        value={cor}
        setValue={setCor}
      />
      <h3>Selecione o tipo do seu dispositivo</h3>

      <Select
        options={["smartphone", "televisao", "tablet"]}
        value={produto}
        setValue={setProduto}
      />
      <Input id="nome" label="Nome" value={nome} setValue={setNome} required />
      <Input id="email" label="Email" value={email} setValue={setEmail} />
      <button>Enviar</button>
    </form>
  );
};

export default App;
