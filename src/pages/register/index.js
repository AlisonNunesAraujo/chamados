import { useContext, useState } from "react";
import "./style.css";
import { AuthProvider } from "../../contexts/auth";

import { Link, useNavigate } from "react-router-dom";

export default function SingUp() {
  const { Registrar, loading } = useContext(AuthProvider);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const navigate = useNavigate();

  function createUser(e) {
    e.preventDefault();
    if (email !== "" && senha !== "") {
      Registrar(email, senha);
    }
    return;
  }

  return (
    <div className="conteiner">
      <form className="login-area">
        <h1>Criar sua conta</h1>
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
        {loading ? (
          <button className="bntEntrar">Craindo...</button>
        ) : (
          <button className="bntEntrar" onClick={createUser}>
            Criar conta
          </button>
        )}
        <Link to="/" className="textCriar">
          Já tenho uma conta!
        </Link>
      </form>
      <div className="imgArea">
        <img
          className="imgLogin"
          src="https://skillstecnologicas.com/wp-content/uploads/2024/08/5-Melhores-Sistemas-de-Chamados-Conheca-Essas-Ferramentas-Poderosas.jpg"
          alt="Logo do GitHub"
        />
      </div>
    </div>
  );
}
