import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";


let maxLength15  = maxLengthCreator(10);

const LoginForm = (props) =>{
    return  <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={"login"} name={"login"}component={"input"} validate={[requiredField, maxLength15]}/>
        </div>
        <div>
            <Field placeholder={"Password"}name={"password"} component={"input"} validate={[requiredField, maxLength15]}/>
        </div>
        <div>
            <Field type={"checkbox"} name={"rememberMe"}component={"input"} validate={[requiredField, maxLength15]}/>
        </div>
        <div>
            <button>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({form: `login`})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) =>{
        console.log(formData)
    }
    return<div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

export default Login;