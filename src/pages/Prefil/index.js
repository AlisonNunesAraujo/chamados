import Header from "../../components/Header";
import { useContext, useState } from "react";
import { AuthProvider } from "../../contexts/auth";

import "./style.css";

export default function Perfil() {
    const{user,}=useContext(AuthProvider)

   


  return (
    <div className="cont">
      <Header />
      <div className="headerPerfil">
        <h2 className="titlePerfil">Meu perfil!</h2>
      </div>

      <div className="form">
        <label className="labelText">Email:</label>
        <input
          value={user.email}
          disabled={true}
          className="inputsLabel"
        />
        <div className="bntSalvar">
            <button  className="bntSair">Sair</button>
        </div>

        
      </div>
    </div>
  );
}
