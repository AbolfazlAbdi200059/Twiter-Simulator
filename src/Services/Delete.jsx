import Http from "./Http";

const Delete = (id) => {
    return Http.delete(`/Twites/${id}`)
}
 
export default Delete;