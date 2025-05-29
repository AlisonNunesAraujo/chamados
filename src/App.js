import SingIn from "./pages/Entrar";
import { BrowserRouter } from "react-router-dom";

import Rotas from "./routs";
import AuthContexts from "./contexts/auth";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
      <AuthContexts>
        <Rotas />
        <ToastContainer autoClose={1000} />
      </AuthContexts>
    </BrowserRouter>
  );
}

export default App;
