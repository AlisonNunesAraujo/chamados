import "./style.css";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Modal from "../../components/Modal";

import { useEffect, useState } from "react";
import { format } from "date-fns";
import { db } from "../../firebase/firebaseConection";
import {
  collection,
  getDocs,
  limit,
  orderBy,
  where,
  query,
} from "firebase/firestore";

const listRef = collection(db, "chamados");

function Home() {
  const [chamados, setChamados] = useState([]);
  const [showmodal, setShowmodal] = useState(false);
  const [detail, setDetail] = useState("");

  useEffect(() => {
    async function LoadChamados() {
      const q = query(listRef, orderBy("created", "desc"));

      const queryRef = await getDocs(q);
      setChamados([]);
      await Update(queryRef);
    }
    LoadChamados();

    return () => {};
  }, []);

  async function Update(queryRef) {
    let lista = [];

    queryRef.forEach((doc) => {
      lista.push({
        id: doc.id,
        assunto: doc.data().assunto,
        cliente: doc.data().cliente,
        clienteId: doc.data().clienteId,
        createdFormat: format(doc.data().created.toDate(), "dd/MM/yyyy"),
        status: doc.data().status,
        complemento: doc.data().complemento,
      });
    });

    setChamados((chamados) => [...chamados, ...lista]);
  }

  function feacharModal(item) {
    setShowmodal(!showmodal);
    setDetail(item);
  }

  return (
    <div className="index">
      <Header />

      <h1 className="titleHome">Sua Tabela</h1>

      <div className="buttonNew">
        <button className="bntNovoChamado">
          <Link to="/New" className="textbnt">
            {" "}
            Novo chamado
          </Link>
        </button>
      </div>

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
            {chamados.map((item, index) => {
              return (
                <tr key={index}>
                  <td data-label="Clientes">{item.cliente}</td>
                  <td data-label="Assunto">{item.assunto}</td>
                  <td>{item.status}</td>
                  <td>{item.createdFormat}</td>
                  <td>
                    <Link to={`/new/${item.id}`} className="bntEditar">
                      Editar
                    </Link>
                    <button
                      onClick={() => feacharModal(item)}
                      className="bntBuscar"
                    >
                      Buscar
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {showmodal && (
        <Modal conteudo={detail} close={() => setShowmodal(!showmodal)} />
      )}
    </div>
  );
}

export default Home;
