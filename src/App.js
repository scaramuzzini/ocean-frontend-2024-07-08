import logo from './logo.svg';
import './App.css';


function ItemDoCarrinho({nomeDoItem, descricaoDoItem}) {
  return (
    <>
      <h1>
        Item: {nomeDoItem}
      </h1>
      <h4>
        Descrição do Item: {descricaoDoItem}
      </h4>
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
        <ItemDoCarrinho nomeDoItem={item1} />
      </header>
      
    </div>
  );
}

export default App;
