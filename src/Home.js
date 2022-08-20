import React from "react";
import { useNavigate, Outlet} from "react-router-dom";

function Home(){

    let navigate = useNavigate();
    function login(){

        navigate("/login")
    }
    function signup(){
        navigate("/signup");
    }

    return(
        <div style={{width:"100%", height:"100vh", display:"flex", justifyContent:"center", alignItems:"center"}}>
            <button className="login-button" onClick={login}>Sign in</button>
            <button className="signup-button" onClick={signup}>Sign up</button>
            <Outlet />
        </div>
    )
}

export default Home;