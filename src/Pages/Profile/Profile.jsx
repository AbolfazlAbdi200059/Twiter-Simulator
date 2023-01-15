import { useAuth } from "../../Context/AuthProvider/AuthProvider";
import "./Profile.css";

const Profile = () => {

    const Auth = useAuth();

    console.log(Auth.name);
    return (  
        <div className="profile">
            <div className="profileImage"></div>
            <div className="ProfileName details left">Name: {Auth.name}</div> 
            <div className="clear"></div>
            <div className="Profileemail details left">Email:   {Auth.email}</div>
            <div className="clear"></div>
            <div className="ProfilePhoneNumber details left">PhoneNumber:   {Auth.PhoneNumber}</div>
        </div>
    );
}
 
export default Profile;