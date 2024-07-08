import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function ItemDoCarrinho({nomeDoItem, descricaoDoItem}) {
  const [quantidade, setQuantidade] = useState(1);

  return (
    <>
      <h1>
        Item: {nomeDoItem}
      </h1>
      <h4>
        Descrição do Item: {descricaoDoItem}
      </h4>
      <p>Quantidade: {quantidade} </p>
      <button 
        onClick={
            () => setQuantidade(quantidade + 1)
            }
      >Adicionar +1</button>
      <button 
        onClick={
            () => setQuantidade(quantidade - 1)
            }
      >Diminuir -1</button>
    </>
  )
}


function Saudacao({nome}) {
  return (
    <h1>
      Olá, {nome}
    </h1>
  )
}

function OceanApp() {
  return (
    <div>
      <h1> App Ocean</h1>
    </div>
  )
}

function App() {

  let item1 = "Panela";
  let item2 = "colher";

  return (
    <div className="1App">
      <header className="App-header">
        <h1>Meu primeiro projeto react</h1>
        <ItemDoCarrinho nomeDoItem={item1} descricaoDoItem="Panela inox de qualidade."  />
        <ItemDoCarrinho nomeDoItem={item2} descricaoDoItem="Colher inox sem qualidade."  />
      </header>
      
    </div>
  );
}

export default App;
