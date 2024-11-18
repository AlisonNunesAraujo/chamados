import Header from "../../components/Header";

import "./new.css";

export default function New() {
  return (
    <div>
      <Header />
      <h1>new</h1>

      <div className="formNew">
        <form className="formulario">
          <label>Clientes</label>

          <select className="">
            <option key={1} value={1}>
              Teste 1
            </option>
            <option key={2} value={2}>
              Teste 2
            </option>
          </select>

          <label>Assunto</label>
          <select>
            <option>Suporte</option>
            <option>Visita tecnica</option>
            <option>finançeiro</option>
          </select>

          <label>Status</label>
          <div>
            <input type="radio" name="radio" value="aberto" />{" "}
            <span>Em Aberto</span>
            <input type="radio" name="radio" value="progresso" />{" "}
            <span>Progresso</span>
            <input type="radio" name="radio" value="atendido" />{" "}
            <span>Atendido</span>
          </div>
        </form>
      </div>
    </div>
  );
}
