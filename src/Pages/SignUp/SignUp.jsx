import {useFormik} from "formik";
import {withRouter} from "react-router-dom";
import Input from "../../Components/Input/Input";
import * as Yup from "yup";
import "./SignUp.css";
import SignUpUser from "../../Services/SignUpUser";
import axios from "axios";
import { useAuthAction } from "../../Context/AuthProvider/AuthProvider";
import { useState } from "react";

const SignUp = ({history}) => {

    const setAuth = useAuthAction();

    const [adress , setAdress] = useState();

    const AdressHandler = (a) => {
        console.log(a);
        setAdress(a)
    }
    
    const initialValues = {
        name: "",
        email: "",
        password: "",
        PhoneNumber: "",
        passwordConfirm: "",
    }

    // 2.
    const onSubmit = async (values) => {
        const {name , email , PhoneNumber , password} = values;
        const Data = {
            name,
            email,
            PhoneNumber,
            password,
            adress
        }
        try {
            const a = await axios.get("http://localhost:3001/Regester");
            const b = a.data.findIndex((t) => t.email === values.email);
            if(b >= 0){
                alert("email is false");
            } else {
                const {data} = await axios.post("http://localhost:3001/Regester" , Data);
                console.log(data);
                setAuth(data);
                localStorage.setItem("authState" , JSON.stringify(data));
                history.push("/")
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
        <form className="Form">
                <Input formik={formik} name={"name"} label={"name"} type={"text"}/>
                <Input formik={formik} name={"email"} label={"email"} type={"email"}/>
                <Input formik={formik} name={"PhoneNumber"} label={"Phone Number"} type={"text"}/>
                <Input formik={formik} name={"password"} label={"password"} type={"password"}/>
                <Input formik={formik} name={"passwordConfirm"} label={"password Confirm"} type={"password"}/>
                <input type="file" className="file" onChange={(e) => AdressHandler(e.target.value)} name="filename"></input>
                <button type="button" onClick={() => onSubmit(formik.values)} className="btn">Submit</button>
        </form>
    );
}
 
export default withRouter(SignUp);