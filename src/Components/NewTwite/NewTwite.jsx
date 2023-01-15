import { useState } from "react";
import { useAuth } from "../../Context/AuthProvider/AuthProvider";
import { useTwiteAction } from "../../Context/TwiteProvider/TwiteProvider";
import "./NewTwite.css";

const NewTwite = () => {

    const [newTwiteText , setNewTwiteText] = useState("");

    const Auth = useAuth();

    const ChangeHandler = (e) => {
        setNewTwiteText(e);
    }

    const dispatch = useTwiteAction();

    const AddTwite = (text) => {
        if(text) {
            if(Auth) {
                dispatch({type: "AddTwite" , text: text , identity: {name: Auth.name , email: Auth.email}});
                setNewTwiteText("");
            } else {
                alert("Login to Your Account");
            }
        } else{
            alert("Enter a text");
        }
    }

    return (  
        <div className="NewTwite">
            <div className="imageNewTwite right"></div>
            <input type="text" className="write right" value={newTwiteText} onChange={(e) => ChangeHandler(e.target.value)} placeholder=" توییت کن ..."/>
            <button className="addtwite left" onClick={() => AddTwite(newTwiteText)}>توییت</button>
            <div className="clear"></div>
        </div>
    );
}
 
export default NewTwite;