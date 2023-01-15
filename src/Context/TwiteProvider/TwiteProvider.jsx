import axios from "axios";
import { useContext , useEffect , useReducer , createContext , useState } from "react";
import Layout from "../../Layout/Layout";
import Hashtags from "../../Pages/Hashtags/Hashtags";
import Main from "../../Pages/Main/Main";
import People from "../../Pages/People/People";
import TwiteReducer from "./TwiterReducer";


const TwiteContex = createContext();
const TwiteContexDispatcher = createContext();

const initialstate = [];

const TwiteProvider = ({children}) => {

    const [Twite , dispatch] = useReducer(TwiteReducer , initialstate);

    useEffect(() => {
        const FetchTwite = async() => {
            const {data} = await axios.get("http://localhost:3001/Twites");
            dispatch({type: "init-twite" , data: data})
        }
        try {
            FetchTwite();
        } catch (error) {
            
        }
    },[])

    return (  
        <TwiteContex.Provider value={Twite}>
            <TwiteContexDispatcher.Provider value={dispatch}>
                {children}
            </TwiteContexDispatcher.Provider>
        </TwiteContex.Provider>
    );
}
 
export default TwiteProvider;


export const useTwite = () => useContext(TwiteContex);
export const useTwiteAction = () => useContext(TwiteContexDispatcher);