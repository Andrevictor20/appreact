import React from 'react';
import Input from './Forms/Input';
import useValidateForm from './Hooks/useValidateForm';

const App = () => {
  const cep = useValidateForm('cep');
  const email= useValidateForm('email');
  const nome = useValidateForm();
  const sobrenome = useValidateForm(false);

  function handleSubmit(event) {
    event.preventDefault();
    if (cep.validate() && email.validate()) {
      console.log('Enviar');
    } else {
      console.log('Não enviar');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Nome"
        id="nome"
        type="text"
        {...nome}
      />
      <Input
        label="Sobrenome"
        id="sobrenome"
        type="text"
        {...sobrenome}
      />
      <Input
        label="CEP"
        id="cep"
        type="text"
        placeholder="00000-000"
        {...cep}
      />
      <Input
        label="email"
        id="email"
        type="text"
        placeholder="XXXXX@example.com"
        {...email}
      />
      <button>Enviar</button>
    </form>
  );
};

export default App;
