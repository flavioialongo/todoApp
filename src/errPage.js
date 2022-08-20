import React from "react";
import {useLocation} from "react-router-dom"
function ErrorPage(){
    const {state} = useLocation()
    return(<div style={{width: "100%", height: "100vh", display:"flex", justifyContent:"center", alignItems:"center"}}>
        <h1>{(state!=null)?state.err:"HTTP ERROR"}</h1>
        </div>)
}

export default ErrorPage;