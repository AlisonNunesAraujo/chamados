import { createContext, useEffect, useState } from "react";
import { auth, db } from "../firebase/firebaseConection";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { useNavigate } from "react-router-dom";

export const AuthProvider = createContext({});

function AuthContexts({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(
    (email) => {
      const userData = localStorage.getItem("@dadosUser");

      if (userData) {
        setUser(JSON.parse(userData));
      }
    },
    [renderDados]
  );

  async function Logar(email, senha) {
    try {
      await signInWithEmailAndPassword(auth, email, senha);
      let data = {
        email: email,
      };
      setUser(data);
      navigate("/Home");
    } catch (err) {
      alert("erro");
    }
  }

  // Função de registro
  async function Registrar(email, senha) {
    setLoading(true);

    try {
      const value = await createUserWithEmailAndPassword(auth, email, senha);

      const data = {
        email: value.user.email,
        uid: value.user.uid,
      };

      setUser(data);
      renderDados(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  function renderDados(data) {
    localStorage.setItem("@dadosUser", JSON.stringify(data));
  }

  async function Sair() {
    await signOut(auth);
    setUser(null);
    localStorage.removeItem("@dadosUser");
    navigate("/");
  }

  return (
    <AuthProvider.Provider
      value={{ signeed: !!user, user, Registrar, loading, Logar, Sair }}
    >
      {children}
    </AuthProvider.Provider>
  );
}

export default AuthContexts;
