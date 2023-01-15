import "./Hashtags.css";
import Hashtag from "../../Components/Hashtag/Hashtag";

const Hashtags = () => {

    const title = [
        "مهسا_امینی",
        "نیکا_شاکرمی",
        "معترضین_فقر"
    ]

    return (  
        <div className="hashtag right">
            <div className="icon right"></div>
            <div className="Twiter right">توییتر فارسی</div>
            <div className="clear"></div>
            <div className="hashtags">
                <h3 className="bestHashtag">#داغ ترین هشتگ ها</h3>
                {title.map((t) => {
                    return(
                        <Hashtag
                        title={t}
                        />
                    )
                })}
            </div>
        </div>
    );
}
 
export default Hashtags;