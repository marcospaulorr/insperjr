import Formulario from './componentes/Formulario';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import { useState } from 'react';
import './App.css';

function App() {

  const [cliente, setClientes] = useState([])

  const aoNovoClienteAdicionado = (cliente) => {
    console.log(cliente)
  }

  return (
    <div className="App">
      <Header />
      <Formulario aoClienteCadastrado={cliente => aoNovoClienteAdicionado(cliente)}/>
      <Footer />
    </div>
  );
}

export default App;