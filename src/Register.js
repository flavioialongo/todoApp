import axios from "axios"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom";


function Register(props){
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    let navigate = useNavigate();

    function handleChange(event){
        let selector = event.target.name
        switch(selector){
            case "firstName": 
                setFirstName(event.target.value)            
            break;
            case "lastName": 
                setLastName(event.target.value)            
            break;
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
        event.preventDefault()
        const user = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password,
        }
        axios.post("http://localhost:4000/user/register", user).then((res)=>{
            console.log(res.data);
            navigate("/home", {replace: true})
        }).catch(err=>console.log(err));
    }


    return(
        <div>
            <header>Register</header>
            <form onSubmit={handleSubmit} style={{"display": "flex", "flexDirection": "column"}}>
            <div style={{"display": "flex", alignContent: "center", justifyContent: "center"}}>
                <input style={{"margin": "0 2% 0 0"}} type="text" className="register-firstname" name="firstName" placeholder="First Name" onChange = {handleChange} required={true}/>
                <input style={{"margin": "0 0 0 2%"}} type="text" className="register-lastname" name="lastName" placeholder="Last Name" onChange = {handleChange} required={true}/>
            </div>
            <div style={{"display": "flex", alignContent: "center", justifyContent: "center"}}>
                <input style={{"margin": "5% 2% 2% 0"}} type="email" className="register-email" name="email" placeholder="Email" onChange = {handleChange} required={true}/>
                <input style={{"margin": "5% 0 2% 2%"}} type="password" className="register-password" name="password" placeholder="Password" onChange = {handleChange} required={true}/>
            </div>
            <button className="todo-button" type="submit">Sign up</button>
            </form>
        </div>
    );
}

export default Register;