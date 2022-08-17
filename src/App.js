
import "./mainStyle.css"
import React from "react";
import Main from "./Main"
import Login from "./Login"
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Register";

function App(){
    return(
    <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}/>
                <Route path="/home" element={<Main />}/>
                <Route path="/signup" element={<Register />}/>
            </Routes>
    </BrowserRouter>
    );
}
export default App;