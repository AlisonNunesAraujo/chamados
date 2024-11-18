import { useState, useContext } from "react";

import "./style.css";
import { Link } from "react-router-dom";

import { AuthProvider } from "../../contexts/auth";

export default function SingIn() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const {Logar} = useContext(AuthProvider)

  async function Hendle(e){
    e.preventDefault()
    Logar(email,senha)
    
  }
  
  return (
    <div className="conteiner">
      <form className="login-area">
      <h1>Entar</h1>
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
        <button className="bntEntrar" onClick={Hendle}>Entrar</button>
        <Link to="/SingUp" className="textCriar">Criar Conta</Link>
      </form>
    </div>
  );
}
