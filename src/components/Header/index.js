import { Link } from "react-router-dom";
import "./style.css";

export default function Header() {
  return (
    <div className="headerGruop">
      <h2>Header</h2>

      <nav className="nav">
        <h3>
          <Link className="LinkMenu" to="/Home">Chamadas</Link>
        </h3>
        <h3>
          <Link className="LinkMenu" to="/Clientes">
            Clientes
          </Link>
        </h3>
        <h3>
          <Link className="LinkMenu" to="/Perfil">
            Perfil
          </Link>
        </h3>
      </nav>
    </div>
  );
}
