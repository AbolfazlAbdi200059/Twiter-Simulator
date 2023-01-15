import { useTwite, useTwiteAction } from "../../Context/TwiteProvider/TwiteProvider";
import { FcLike } from "react-icons/fc";
import { SlDislike } from "react-icons/sl";
import "./Twite.css";
import { useState } from "react";
import axios from "axios";
import { useAuth } from "../../Context/AuthProvider/AuthProvider";
import { useEffect } from "react";

const Twite = ({t}) => {

    const Auth = useAuth();

    const Twites = useTwite();

    console.log(Twites);

    const {name , email , text , id , like , img} = t;

    const dispatch = useTwiteAction();

    const [a , setA] = useState(false);

    useEffect(() => {
        dispatch({type: "checklike" , id , userid: Auth.id , setA})
    } , [])

    const Like = async() => {
        setA(!a);

            // axios.put(`http://localhost:3001/Regester/${action.data[c].id}` , action.data[c]);
            // axios.put(`http://localhost:3001/Twites/${action.id}` , SelectedTodo);

        if(a === false){
            const {data} = await axios.get("http://localhost:3001/Regester");
            dispatch({type: "like" , id , name , data , userid: Auth.id});
        }else {
            const {data} = await axios.get("http://localhost:3001/Regester");
            dispatch({type: "Unlike" , id , name , data , userid: Auth.id});
        }
    }

    return (  
        <div className="Twite">
            <div className={`imagetwiter right`}>{img}</div>
            <div className="name right">{name}</div>
            <div className="email right">{email}</div>
            <div className="clear"></div>
            <div className="twitetext right">{text}</div>
            <div className="clear"></div>
            <div className="like left" onClick={Like}>{a === false ? <SlDislike/> : <FcLike/>}</div>
            <div className="left numberOfLike">{like}</div>
            <div className="clear"></div>
        </div>
    );
}
 
export default Twite;