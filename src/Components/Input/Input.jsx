import "./Input.css";

const Input = ({name , label , formik , type}) => {

    return (  
        <div className="a">
            <label className="label left">{label}</label>
            <br />
            <input type={type} name={name} className="FormControl" {...formik.getFieldProps({name})}/>
            {formik.errors[name] && formik.touched[name] && 
                <div className="error">{formik.errors[name]}</div>
            }
        </div>
    );
}
 
export default Input;