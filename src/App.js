
import "./mainStyle.css"
import React from "react";
import Main from "./Main"
import Login from "./Login"
import { BrowserRouter, Router,Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Register from "./Register";

function App(){
    return(
    <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />}/>
                <Route path="/" element={<Main />}/>
                <Route path="/signup" element={<Register />}/>
            </Routes>
    </BrowserRouter>
    );
}
export default App;