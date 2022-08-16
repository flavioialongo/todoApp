import React from "react"
function Register(props){
    return(
        <div>
            <header>Register</header>
            <form style={{"display": "flex", "flexDirection": "column"}}>
            <div style={{"display": "flex", alignContent: "center", justifyContent: "center"}}>
                <input style={{"margin": "0 2% 0 0"}} type="text" className="register-firstname" placeholder="First Name" required={true}/>
                <input style={{"margin": "0 0 0 2%"}} type="text" className="register-lastname" placeholder="Last Name" required={true}/>
            </div>
            <div style={{"display": "flex", alignContent: "center", justifyContent: "center"}}>
                <input style={{"margin": "5% 2% 2% 0"}} type="text" className="register-email" placeholder="Email" required={true}/>
                <input style={{"margin": "5% 0 2% 2%"}} type="text" className="register-password" placeholder="Password" required={true}/>
            </div>
            <button className="todo-button" type="submit">Sign up</button>
            </form>
        </div>
    );
}

export default Register;