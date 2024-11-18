import { createContext, useEffect, useState } from "react";
import { auth, db } from "../firebase/firebaseConection";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { doc, setDoc } from "firebase/firestore";

import { useNavigate } from "react-router-dom";

export const AuthProvider = createContext({});

function AuthContexts({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect((email) => {
    if (renderDados) {
      setUser(true);
    }
  }, []);

  async function Logar(email, senha) {
    try {
      await signInWithEmailAndPassword(auth, email, senha);
      let data = {
        email: email,
      };
      setUser(data);
      renderDados(data);
      navigate("/Home");
    } catch (err) {
      alert("erro");
    }
  }

  // Função de registro
  async function Registrar(nome, email, senha) {
    setLoading(true);

    try {
      const value = await createUserWithEmailAndPassword(auth, email, senha);
      const uid = value.user.uid;

      await setDoc(doc(db, "users", uid), {
        nome: nome,
      });

      const data = {
       
        email: value.user.email,
      };

      setUser(data);
      renderDados(data)
      
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

   function renderDados(data) {
    localStorage.setItem("@dadosUser", JSON.stringify(data));
  }

  return (
    <AuthProvider.Provider
      value={{ signeed: !!user, user, Registrar, loading, Logar }}
    >
      {children}
    </AuthProvider.Provider>
  );
}

export default AuthContexts;
