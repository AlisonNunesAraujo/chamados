import { useContext, useEffect, useState } from "react";
import Header from "../../components/Header";
import "./style.css";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/firebaseConection";
import {
  getDoc,
  getDocs,
  collection,
  addDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

import { AuthProvider } from "../../contexts/auth";
import { toast } from "react-toastify";
const list = collection(db, "clientes");

export default function New() {
  const { id } = useParams();

  const { user } = useContext(AuthProvider);

  const [custemers, setCustemers] = useState([]);
  const [selected, setSelected] = useState(0);
  const [complemento, setComplento] = useState("");
  const [status, setStatus] = useState("aberto");
  const [assunto, setAssunto] = useState("");
  const [idCustumers, setIdCustumers] = useState(false);

  useEffect(() => {
    async function TrazerLista() {
      const query = await getDocs(list)
        .then((snapshot) => {
          let lista = [];

          snapshot.forEach((doc) => {
            lista.push({
              id: doc.id,
              nomeFantasia: doc.data().nome,
            });
          });

          setCustemers(lista);

          if (id) {
            loadId(lista);
          }
        })
        .catch((err) => {
          toast.error("Algo deu errado!");
        });
    }

    TrazerLista();
  }, [id]);

  async function loadId(lista) {
    const docRef = doc(db, "chamados", id);
    await getDoc(docRef)
      .then((snapshot) => {
        setAssunto(snapshot.data().assunto);
        setComplento(snapshot.data().complemento);
        setStatus(snapshot.data().status);

        let index = lista.findIndex(
          (item) => item.id === snapshot.data().clienteId
        );
        setSelected(index);
        setIdCustumers(true);
      })
      .catch((err) => {
        toast.error("Algo deu errado!");
        setIdCustumers(false);
      });
  }

  function Hendle(e) {
    setStatus(e.target.value);
  }

  function HendleSelect(e) {
    setAssunto(e.target.value);
  }

  function HendleSelected(e) {
    setSelected(e.target.value);
  }

  async function handleRegister(e) {
    e.preventDefault();
    if (
      assunto === "" ||
      selected === "" ||
      complemento === "" ||
      status === ""
    ) {
      toast.error("Preencha todos os campos!");
      return;
    }

    if (idCustumers) {
      const docRef = doc(db, "chamados", id);
      await updateDoc(docRef, {
        created: new Date(),
        cliente: custemers[selected].nomeFantasia,
        clienteId: custemers[selected].id,
        assunto: assunto,
        complemento: complemento,
        status: status,
      }).then(() => {
        toast.success("Chamado atualizado com sucesso!");
      });

      return;
    }

    //Registrar um chamado
    await addDoc(collection(db, "chamados"), {
      created: new Date(),
      cliente: custemers[selected].nomeFantasia,
      clienteId: custemers[selected].id,
      assunto: assunto,
      complemento: complemento,
      status: status,
    })
      .then(() => {
        toast.success("Chamado criado com sucesso!");
      })
      .catch((error) => {
        toast.error("Algo deu errado!");
      });
  }

  return (
    <div className="conteinerNew">
      <Header />
      <h1 className="title">Criar Novo</h1>

      <div className="formNew">
        <form className="formulario" onSubmit={handleRegister}>
          <label className="label">Clientes</label>

          <select
            value={selected}
            onChange={HendleSelected}
            className="selectOne"
          >
            {custemers.map((item, index) => {
              return (
                <option key={index} value={index}>
                  {item.nomeFantasia}
                </option>
              );
            })}
          </select>

          <label className="label">Assunto</label>
          <select className="selectOne" value={assunto} onChange={HendleSelect}>
            <option className="optionOne">Suporte</option>
            <option className="optionOne">Visita tecnica</option>
            <option className="optionOne">finançeiro</option>
          </select>

          <label className="label">Status</label>
          <div>
            <input
              type="radio"
              name="radio"
              value="aberto"
              onChange={Hendle}
              className="inputsNew"
            />{" "}
            <span>Em Aberto</span>
            <input
              type="radio"
              name="radio"
              value="progresso"
              onChange={Hendle}
              className="inputsNew"
            />{" "}
            <span>Progresso</span>
            <input
              type="radio"
              name="radio"
              value="atendido"
              onChange={Hendle}
              className="inputsNew"
            />{" "}
            <span>Atendido</span>
          </div>

          <h2>Complemento</h2>
          <div className="descrever">
            <textarea
              value={complemento}
              onChange={(e) => setComplento(e.target.value)}
              placeholder="Descreva"
              className="inputDesc"
            />
            <button className="bntDesc" type="submit">
              Registrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
