import { useContext } from "react";
import { AuthProvider } from "../contexts/auth";
import { Navigate } from "react-router-dom";


function Private({children}){
    const {signeed} = useContext(AuthProvider)
    
    if(!signeed){
        return <Navigate to="/"/>
    }

    

    return children;
}

export default Private;