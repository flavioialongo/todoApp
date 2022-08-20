import React from "react";
import Form from "./Form";
import ToDoList from "./ToDoList";
import { useEffect, useState } from "react";
import axios from "axios"
import {useNavigate, useLocation} from "react-router-dom"

function Main(){

    const [todoList, setList] = useState([]);
    const [selection, setSelection] = useState("all");
    const [filteredTodo, setFilteredTodo]=useState([]);
    const [name, setName] = useState("")


    const location = useLocation();
    const state = location.state
    const navigate = useNavigate()

    useEffect(()=>{
        console.log(state)
        axios.get("home/", {headers:(state!=null) ? state.headers : null})
    .then(res=>{
        setList(res.data.todoList)
        setName(res.data.name)}).catch(err=>{
        navigate("/err", {state: {err: err.response.data}})
    })
    }, []);

useEffect(()=>{
    filter();
}, [todoList,selection]);

function filter(){
    switch(selection){
        case "completed":
            setFilteredTodo(todoList.filter(x=>x.completed===true));
            break;
        case "uncompleted":
            setFilteredTodo(todoList.filter(x=>x.completed!==true));
            break;
        default:
            setFilteredTodo(todoList);
            break;
        }
}
function logout(){
    navigate(".", {replace:true});
    navigate("/", {replace:true});
}



    return <div className="App">       
        <header>{name}'s todo</header>
        <Form   
        setSelection={setSelection}
        setList={setList} 
        auth_header={(state!=null)?state.headers : null}
        todoList={todoList}/>
        <ToDoList 
        auth_header={(state!=null)?state.headers : null}
        filteredTodo={filteredTodo}
        todoList={todoList} 
        setList={setList}/>

        <footer className="logout">
            <button className="logout-button" onClick={logout}>Logout</button>
        </footer>
    </div>
}

export default Main;