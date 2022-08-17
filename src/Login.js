import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Login(props){

    let navigate = useNavigate();

    function gotoRegister(){
        navigate("./signup", { replace: false });
    }
    return(
        <div>
            <header>Login</header>
            <form style={{"display": "flex", "flexDirection": "column"}}>
            <input style={{"margin": "2% 0 2% 0"}} type="text" className="login-email" placeholder="Email" required={true}/>
            <input style={{"margin": "2% 0 2% 0"}} type="text" className="login-password" placeholder="Password" required={true}/>
            <div style={
                {display: "flex", 
                flexDirection: "row", 
                alignItems: "center",}}>
                    <button style={{"marginRight": "1%"}} className="todo-button" type="submit">Login</button>
                    <button style={{"marginLeft": "1%"}} className="register-button" onClick={gotoRegister} type="button">Register</button> 
            </div>
            
            </form>
        </div>
    );
}

export default Login;