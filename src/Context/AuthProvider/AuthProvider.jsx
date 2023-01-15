import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

const AuthProviderContex = createContext();
const AuthProviderContexDispatcher = createContext();

const AuthProvider = ({children}) => {

    const [state , setState] = useState(false);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("authState")) || false;
        setState(data);
    },[])

    useEffect(() => {
        localStorage.setItem("authState" , JSON.stringify(state))
    },[state])

    return (  
        <AuthProviderContex.Provider value={state}>
            <AuthProviderContexDispatcher.Provider value={setState}>
                {children}
            </AuthProviderContexDispatcher.Provider>
        </AuthProviderContex.Provider>
    );
}
 
export default AuthProvider;

export const useAuth = () => useContext(AuthProviderContex);
export const useAuthAction = () => useContext(AuthProviderContexDispatcher);