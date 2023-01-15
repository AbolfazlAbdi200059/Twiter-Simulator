import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Twite from "../../Components/Twite/Twite";
import { useAuth } from "../../Context/AuthProvider/AuthProvider";
import {useTwiteAction , useTwite} from "../../Context/TwiteProvider/TwiteProvider";
import { useUser } from "../../Context/UserProvider/UserProvider";
import "./People.css";

const People = ({name}) => {

    const Auth = useAuth();

    const User = useUser();

    const dispatch = useTwiteAction();

    const Selected = (name) => {
        const getData = async() => {
            const {data} = await axios.get("http://localhost:3001/Twites");
            dispatch({type: "selected" , data , name})
        }
        try {
            getData();
        } catch (error) {
            
        }
    }

    

    return (  
        <div className="people left">
            <div className="user">
                <Link to={"/Profile"}>
                    <div className="image left"></div>
                    <div className="username left">{Auth.name}</div>
                </Link>
                <div className="clear"></div>
            </div>
            <div className="best">
                <h3 className="h3">بهترین خبرنگاران</h3>
                <div className="bestJornalist">
                    {User ? 
                    <div>
                        {User.map((t) => {
                        if(t.totalLikes > 10) {
                            return (
                                <div className="topmenu" key={t.id} onClick={() => Selected(t.name)}>
                                    <div className={`topimage right`}></div>
                                    <div className="topname right">{t.name}</div>
                                    <div className="clear"></div>
                                </div>
                            )
                        }
                    })}
                    </div> : <></>
                }
                </div>
            </div>
        </div>
    );
}
 
export default People;