import Http from "./Http";

const PostTwite = (Twite) => {
    return Http.post("/Twites" , Twite)
}
 
export default PostTwite;