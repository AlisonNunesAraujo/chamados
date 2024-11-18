import SingIn from "./pages/Entrar";
import {BrowserRouter} from 'react-router-dom'

import Rotas from './routs'
import AuthContexts from "./contexts/auth";

function App() {
  return(
    <BrowserRouter>
      <AuthContexts>
        <Rotas/>
      </AuthContexts>
    </BrowserRouter>
  );
}

export default App;
