import { Link } from "react-router-dom";
import Header from "../../components/Header";

import "./home.css";

function Home() {
  return (
    <div className="index">
      <div>
        <Header />
      </div>

      <h1>Home</h1>

      <div className="tt">
        <table>
          <thead>
            <tr>
              <th scope="col">Clientes</th>
              <th scope="col">Assunto</th>
              <th scope="col">Status</th>
              <th scope="col">Cadastrado em</th>
              <th scope="col">#</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Clientes">Maria</td>
              <td data-label="Assunto">trampo</td>
              <td>Em aberto</td>
              <td>Hoje</td>
              <td>
                <button>Buscar</button>
                <button>editar</button>
              </td>
            </tr>

            <tr>
              <td data-label="Clientes">Maria</td>
              <td data-label="Assunto">trampo</td>
              <td>Em aberto</td>
              <td>Hoje</td>
              <td>
                <button>Buscar</button>
                <button>editar</button>
              </td>
            </tr>
          </tbody>
        </table>

        <div>
            <button >
                <Link to="/New"> Novo</Link>
            </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
