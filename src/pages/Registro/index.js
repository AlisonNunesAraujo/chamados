import { useContext, useState } from "react"
import'./style.css'
import { AuthProvider } from "../../contexts/auth"

import { Link, useNavigate } from "react-router-dom"

export default function SingUp(){
    const {Registrar, loading} = useContext(AuthProvider)
    const [nome,setNome] = useState('')
    const [email,setEmail] = useState('')
    const [senha,setSenha] = useState('')

    const navigate = useNavigate();

    function createUser(e){
      
      if(nome !== '' && email !== '' && senha !== ''){
        Registrar(nome, email,senha)
      }
      return;
      
    }

    return(
        <div className="conteiner">
      
      <form className="areaForm" >
      <h1 className="title">Crie a sua conta!</h1>
        <input
        className="inputs"
        type="name"
        placeholder="Name"
        value={nome}
        onChange={(e)=> setNome(e.target.value)}

        />
        <input
          className="inputs"
          type="email"
          placeholder="E-Mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="inputs"
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <button className="bntCriar" onClick={createUser}>
          {loading ? 'cadastrando...' : 'Cadastrar'}
        </button>

        <Link to="/" className="textVoltar">Voltar</Link>
        
      </form>
    </div>
    )
}