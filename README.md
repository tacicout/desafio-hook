# desafio-hooks

### Desafio React: Criar um Componente de Botão com Vários Estados
Seu objetivo é criar um componente React que consome uma API usando um botão para fazer uma requisição GET e usar o hook useEffect para fazer a mesma requisição ao carregar a página:


Passos:
1 - Crie um novo projeto React usando create-react-app (ou qualquer método que preferir).

Objetivos

O objetivo deste projeto é criar uma aplicação web simples que faz uma requisição assíncrona para a API do Rick and Morty usando `fetch`, trata possíveis erros com `try/catch` e exibe os dados dos personagens em uma página HTML.


Link da API: `https://rickandmortyapi.com/`


:warning: 
O arquivo fetch.js deve conter o código para fazer a requisição fetch, tratar erros e exibir os dados dos personagens na página.




Sua estrutura de arquivos deverá ser assim:

~~~
src/
|-- components/
|   |-- Button
|   |-- |-- Button.jsx
|   |-- |-- Button.css
|-- FetchData.js
|-- index.js
~~~




## O `src/App.js`
~~~
import React, { useState, useEffect } from 'react';

const FetchData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
   //código
    } catch (error) {
      setError(error.message);
    } 
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
 //código
  );
};

export default FetchData;



~~~
## O `src/App.js`
~~~
import React from 'react';
import FetchData from './FetchData';
import './App.css';

function App() {
  return (
    <div className="App">
      <FetchData />
    </div>
  );
}

export default App;


~~~


Os dumbs Components: https://medium.com/@adson.martins982/smart-e-dumb-components-maximizando-a-efici%C3%AAncia-do-desenvolvimento-front-end-817acd6f36f1
