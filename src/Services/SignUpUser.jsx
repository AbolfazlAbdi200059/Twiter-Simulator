import Http from "./Http";

const SignUpUser = (data) => {
    return Http.post("/user/register" , data);
}
 
export default SignUpUser;