import { useState } from "react";
import Header from "../../components/Header";
import './clientes.css'

import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/firebaseConection";

export default function Clientes() {
  const [nome, setNome] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [endereço, setEndereço] = useState("");


  async function RegistrarClientes(){
    if(nome === '' | cnpj === '' | endereço === ''){
        alert('digite algo')
        return;
    }
    try{
        const response = await addDoc(collection(db, 'clientes'), {
            nome: nome,
            cnpj: cnpj,
            endereço: endereço,
        })

        alert('tudo certo')
    }
    catch(err){
        alert('Algo deu errado')
    }
  }



  return (
    <div className="grup">
      <Header />
      <h2 className="titleClientes">Registrar Clientes</h2>

      <form className="form">
        <label className="titleInput">
          <h2>Nome da Empresa</h2>
        </label>
        <input
          type="text"
          placeholder="Nome da esmpresa"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
           className="inputsClientes"
        />
        <label className="titleInput">
          <h2>Cnpj</h2>
        </label>
        <input
          type="text"
          placeholder="Cnpj"
          value={cnpj}
          onChange={(e) => setCnpj(e.target.value)}
           className="inputsClientes"
        />
        <label className="titleInput">
          <h2>Endereço</h2>
        </label>

        <input
          type="text"
          placeholder="Endereço"
          value={endereço}
          onChange={(e) => setEndereço(e.target.value)}
          className="inputsClientes"
        />
        
      </form>
      <button className="bnt" onClick={RegistrarClientes}>Salvar</button>
      
    </div>
  );
}
