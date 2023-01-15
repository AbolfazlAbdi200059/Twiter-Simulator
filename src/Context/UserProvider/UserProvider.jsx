import axios from "axios";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

const Usercontex = createContext();
const UsercontexDispatcher = createContext();

const UserProvider = ({children}) => {

    const [state , setState] = useState(false);

    useEffect(async () => {
        const {data} = await axios.get("http://localhost:3001/Regester");
        setState(data);
        return data;
    },[]);

    return (  
        <Usercontex.Provider value={state}>
            <UsercontexDispatcher.Provider value={setState}>
                {children}
            </UsercontexDispatcher.Provider>
        </Usercontex.Provider>
    );
}
 
export default UserProvider;

export const useUser = () => useContext(Usercontex);