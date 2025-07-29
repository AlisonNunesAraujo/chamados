import Header from "../../components/Header";
import { useContext, useState } from "react";
import { AuthProvider } from "../../contexts/auth";

import "./style.css";

export default function Perfil() {
  const { user, Sair } = useContext(AuthProvider);

  async function LogOut() {
    Sair();
  }

  return (
    <div className="cont">
      <Header />
      <div className="headerPerfil">
        <h2 className="titlePerfil">Meu perfil</h2>
      </div>

      <div className="form">
        <div className="areaEmail">
          <label className="labelText">Email:</label>
        <input value={user.email} disabled={true} className="inputsLabel" />
        </div>
        
          <button className="bntSair" onClick={LogOut}>
            Sair
          </button>
        
      </div>
    </div>
  );
}
