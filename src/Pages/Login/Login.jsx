import {useFormik} from "formik";
import Input from "../../Components/Input/Input";
import "./Login.css";
import * as Yup from "yup";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { useAuth, useAuthAction } from "../../Context/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const Login = ({history}) => {

    const setAuth = useAuthAction();

    const initialValues = {
        name: "",
        email: "",
        password: "",
        PhoneNumber: "",
        passwordConfirm: "",
        gender: "",
        country: "",
        ability: [],
    }

    // 2.
    const onSubmit = async (values) => {
        console.log(values);
        try {
            const a = await axios.get("http://localhost:3001/Regester");
            const b = a.data.findIndex((t) => t.email === values.email);
            if(b >= 0) {
                setAuth(a.data[b]);
                localStorage.setItem("authState" , JSON.stringify(a.data[b]))
                history.push("/");
                console.log(history);
            }else {
                alert("email is not exist");
            }
        } catch (error) {
            
        }
    }
    
    // 3.
    const validationSchema = Yup.object({
        name: Yup.string().required("name is required").min(3 , "Name lenght not small of 6 character"),
        email: Yup.string().email("invalid email type").required("email is required"),
        password: Yup.string().required("error is required").min(8 , "password lenght not small of 8 character"),
        passwordConfirm: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required("Confirm is required"),
        PhoneNumber: Yup.string("only inter number").required("PhoneNumber is required").min(11 , "PhoneNumber should have 11 character"),
        gender: Yup.string().required("gender is required"),
        country: Yup.string().required("Contry is required"),
        ability: Yup.string().min(0 , "pleace Select a Ability").required("Ability is requred")
    })

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit,
        validationSchema,
        validateOnMount : true,
        enableReinitialize: true
    })

    return (  
        <div className="Login">
            <form className="Form">
                <Input formik={formik} name={"email"} label={"email"} type={"email"}/>
                <Input formik={formik} name={"password"} label={"password"} type={"password"}/>
                <button type="button" onClick={() => onSubmit(formik.values)} className="btn">Submit</button>
            </form>
            <div className="helper">
                <Link to="/SignUp" className="k">Already SignUp?</Link>
            </div>
        </div>
    );
}
 
export default withRouter(Login);