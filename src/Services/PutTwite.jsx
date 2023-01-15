import Http from "./Http";

const PutTwite = (Twite , id) => {
    return Http.put(`Twites/${id}` , Twite)
}
 
export default PutTwite;