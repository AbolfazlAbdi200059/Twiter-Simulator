import { Link } from "react-router-dom";
import { useAuth } from "../../Context/AuthProvider/AuthProvider";
import "./Navigation.css";

const Navigation = () => {

    const Auth = useAuth();

    return (  
        <ul className="ul">
                <div className="li">
                    <Link to="/" className="Link">HomePage</Link>
                </div>
                <div className="li">
                    <Link to={Auth ? "/Profile" : "Login"} className="Link">{Auth ? "Profile" : "Login / SignUp"}</Link>
                </div>
        </ul>
    );
}
 
export default Navigation;