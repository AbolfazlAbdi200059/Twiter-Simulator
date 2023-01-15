import Http from "./Http";

const GetTwite = () => {
    return Http.get("/Twites")
}
 
export default GetTwite;