
import "./mainStyle.css"
import React from "react";
import Main from "./Main"
import Login from "./Login"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Register";
import ErrorPage from "./errPage";
function App(){
    return(
    <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}/>
                <Route path="/home" element={<Main />}/>
                <Route path="/signup" element={<Register />}/>
                <Route path="/err" element={<ErrorPage />}/>
            </Routes>
    </BrowserRouter>
    );
}
export default App;