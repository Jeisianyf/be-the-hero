
//JSX -> html dentro de js -- Criamos o codigo separadamente e apenas exportamos para cá

/*
ESTADO: informação a ser matida, e toda vez q é alterado, o app faz a renderização exibindo as novas info -- não podemos alterar o valor do estado de forma direta
IMUTABILIDADE: como não podemos sobrepor de forma direta o estado, então sobrepomos o valor da variável
  Ex: -------------------------------

import React, {useState} from 'react';
import Header from './Hearder';

function App() {
  const [contador, setContador] = useState(0); //const não tem como alterar seu valor, entao se usa let //useState -> começa em um estado mas pode ir alterando, sem isso só irá mudar no numero no console.log
//useState -> Array = [Valor, Atualização do valor]
//o contador = Valor, quem será alterado
//setContador = quem irá alterar o valor

  function increment() {
    setContador(contador +1);
    //console.log(contador);
  }

  return (
    <div>
      <Header>Contador:{contador}</Header> 
      <button onClick={increment}>Adicionar</button>
    </div>
  );
}

export default App;
*/

// ----- CODIGO DA APP -----------------

import React from 'react';
//import Login from './pages/Login/index' --> ao inves de importar o Login, vou importar as rotas
import Routes from './routes';
import './global.css';
import { Route } from 'react-router-dom';

function App() {
  return(
    // <Login/> -- deixa de ser Login e vira:
    <Routes/>
  );
}

export default App;
