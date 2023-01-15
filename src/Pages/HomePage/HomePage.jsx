import Main from "../Main/Main";
import Hashtag from "../../Components/Hashtag/Hashtag";
import Hashtags from "../Hashtags/Hashtags";
import People from "../People/People";

const HomePage = () => {
    return (  
        <div className="homePage">
            <Hashtags/>
            <People/>
            <Main/>
        </div>
    );
}
 
export default HomePage;