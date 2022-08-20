
import "./mainStyle.css"
import React from "react";
import Main from "./Main"
import Login from "./Login"
import Home from "./Home"
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Register from "./Register";
import ErrorPage from "./errPage";


function App(){

    return(
    <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                
                <Route path="/signup" element = {<Register />} />
                <Route path="/login" element = {<Login />} />
                <Route path="/home" element = {<Main />} />
                <Route path="/err" element = {<ErrorPage />} />
                
            </Routes>
    </BrowserRouter>
    );
}
export default App;