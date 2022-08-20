import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
function Login(){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    let navigate = useNavigate();

    function handleChange(event){
        let selector = event.target.name
        switch(selector){
            case "email": 
                setEmail(event.target.value)            
            break;
            case "password": 
                setPassword(event.target.value)            
            break;
            default:
                break;
        }
    }
    function handleSubmit(event){
        event.preventDefault();
        const user = {
            email: email,
            password: password,
        }
            setEmail("");
            setPassword("");
        axios.post("http://localhost:4000/user/login", user).then((res)=>{
                
                navigate("/home")
        }).catch(err=>{
            alert(err.response.data);
        });
    }
    return(
        <div>
            <header>Login</header>
            <form onSubmit={handleSubmit} style={{"display": "flex", "flexDirection": "column"}}>
            <input style={{"margin": "2% 0 2% 0"}} type="text" onChange={handleChange} value={email} name="email" className="login-email" placeholder="Email" required={true}/>
            <input style={{"margin": "2% 0 2% 0"}} type="password" onChange={handleChange} value={password} name="password" className="login-password" placeholder="Password" required={true}/>
            <div style={
                {display: "flex", 
                flexDirection: "row", 
                alignItems: "center",}}>
                    <button style={{"marginRight": "1%"}} className="todo-button" type="submit">Login</button>
                    <button style={{"marginLeft": "1%"}} className="register-button" onClick={()=>navigate("/signup")} type="button">Register</button> 
            </div>
            
            </form>
        </div>
    );
}

export default Login;