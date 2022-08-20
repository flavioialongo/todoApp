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
        event.preventDefault();
        const user = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password,
        }
            setFirstName("");
            setLastName("");
            setEmail("");
            setPassword("");
        axios.post("http://localhost:4000/user/register", user).then((res)=>{
                console.log(res.headers)
        }).catch(err=>{
            alert(err.response.data)
            
        });
    }
    /// POSSO CREARE VARIABILI H3 CHE DANNO IL MESSAGGIO
    return(
        <div>
            <header>Register</header>
            <form onSubmit={handleSubmit} style={{"display": "flex", "flexDirection": "column"}}>
            <div style={{"display": "flex", alignContent: "center", justifyContent: "center"}}>
                <input style={{"margin": "0 2% 0 0"}} value={firstName} type="text" pattern = "[A-Z]*[a-z]+" className="register-firstname" name="firstName" placeholder="First Name" onChange = {handleChange} required={true}/>
                <input style={{"margin": "0 0 0 2%"}} value={lastName} type="text" pattern = "[A-Z]*[a-z]+" className="register-lastname" name="lastName" placeholder="Last Name" onChange = {handleChange} required={true}/>
            </div>
            <div style={{"display": "flex", alignContent: "center", justifyContent: "center"}}>
                <input style={{"margin": "5% 2% 2% 0"}} value={email} type="email" className="register-email" name="email" placeholder="Email" onChange = {handleChange} required={true}/>
                <input style={{"margin": "5% 0 2% 2%"}} value={password} type="password" className="register-password" min="6" name="password" placeholder="Password" onChange = {handleChange} required={true}/>
            </div>
            <button className="todo-button" type="submit">Sign up</button>
            </form>
        </div>
    );
}

export default Register;