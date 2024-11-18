import { Route, Router, Routes } from "react-router-dom";

import SingIn from "../pages/Entrar";
import SingUp from "../pages/Registro";

import Home from "../pages/Home";
import Perfil from "../pages/Prefil";
import Clientes from "../pages/Clientes";
import New from "../pages/new chamados";
import Private from "./private";

function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<SingIn />} />
      <Route path="/SingUp" element={<SingUp />} />

      <Route
        path="/Home"
        element={
          <Private>
            <Home />
          </Private>
        }
      />
      <Route
        path="/Perfil"
        element={
          <Private>
            <Perfil />
          </Private>
        }
      />
      <Route
        path="/Clientes"
        element={
          <Private>
            <Clientes />
          </Private>
        }
      />

      <Route
        path="/New"
        element={
          <Private>
            <New />
          </Private>
        }
      />
    </Routes>
  );
}
export default Rotas;
