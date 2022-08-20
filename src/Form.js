import React from 'react';
import {useState} from "react"
import axios from "axios"
import {useNavigate} from "react-router-dom"
function Form(props){

    const [inputText, setText] = useState("")
    let navigate = useNavigate();
    function handleChange(event){
        setText(event.target.value)
    }
    
    function handleSubmit(event){
      event.preventDefault()
      if(!(event.target[0].value==="")){
        setText("");
        let taskClear = event.target[0].value.trim()

        //post to add todo
        axios.post("http://localhost:4000/home/add",
       {task: taskClear, completed: false,}, {headers:props.auth_header}
       ).then(res=>{
        //after post is complete, we make a get request to 
        //update all the todos in the screen
        axios.get("http://localhost:4000/home/", {headers:props.auth_header})
        .then(resp=>{props.setList(resp.data.todoList)})
      }).catch(err=>{
        console.log("aoo cazzo problemi")
        console.log(err.response.data)
        navigate("/err", {state: {err:err.response.data}})
      });
    }
  }

    return(
        <form onSubmit={handleSubmit}>
      <input type="text" className="todo-input" value={inputText} onChange= {handleChange} required={true}/>
      <button className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo" onChange={(event)=>props.setSelection(event.target.value)}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>



    );
}
export default Form;
