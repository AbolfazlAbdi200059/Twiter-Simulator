import axios from "axios";
import {useTwiteAction} from "../../Context/TwiteProvider/TwiteProvider";

const Hashtag = ({title}) => {

    const dispatch = useTwiteAction();

    const Hash = (title) => {
        const getData = async() => {
            const {data} = await axios.get("http://localhost:3001/Twites");
            dispatch({type: "search" , title , data});
        }
        try {
            getData();
        } catch (error) {
            
        }
    }

    return (  
        <div className="title" onClick={() => Hash(title)}>
            #{title}
        </div>
    );
}
 
export default Hashtag;