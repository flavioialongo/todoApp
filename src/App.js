import React from 'react';
import Form from "./Form";
import data from "./test"
import ToDoList from "./ToDoList";
import { useEffect, useState } from "react";
import axios from "axios"
import "./mainStyle.css"
function App(){
    const [todoList, setList] = useState([]);
    const [selection, setSelection] = useState("all");
    const [filteredTodo, setFilteredTodo]=useState([])

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

    useEffect(()=>{
        axios.get("http://localhost:4000/todo/")
        .then(res=>setList(res.data)).catch(err=>console.log(err.response.data))
    }, []);
   

    useEffect(()=>{
        filter();
    }, [todoList,selection]);


    return(
    <div className="App">       
        <header>your todo</header>
        <Form   
        setSelection={setSelection}
        setList={setList} 
        todoList={todoList}/>
        <ToDoList 
        filteredTodo={filteredTodo}
        todoList={todoList} 
        setList={setList}/>
    </div>
    );
}
export default App;