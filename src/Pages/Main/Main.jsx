import NewTwite from "../../Components/NewTwite/NewTwite";
import Twite from "../../Components/Twite/Twite";
import "./Main.css";
import Data from "../../Data/Data";
import { useTwite, useTwiteAction } from "../../Context/TwiteProvider/TwiteProvider";
import { useEffect } from "react";
import axios from "axios";
import { useAuth } from "../../Context/AuthProvider/AuthProvider";

const Main = () => {

    const Twites = useTwite();

    axios.get("http://localhost:3001/Regester").then().catch()

    return (  
        <div className="main left">
            <div className="top">
                <h4 className="right home">خانه</h4>
                <div className="clear"></div>
            </div>
            <NewTwite/>
            {Twites ?
                <div className="twitelist">
                {Twites.map((t) => {
                    return (
                        <Twite
                        t={t}
                        key={t.id}
                    />
                )
            })}
            </div> : 
            <></>
            }
        </div>
    );
}
 
export default Main;