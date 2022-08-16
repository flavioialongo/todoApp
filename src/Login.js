import React from "react";
function Login(props){
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
                    <button style={{"marginLeft": "1%"}} className="todo-button" type="button">Register</button> 
            </div>
            
            </form>
        </div>
    );
}

export default Login;