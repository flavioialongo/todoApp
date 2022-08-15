import React from 'react';
import axios from "axios"
function Todo(props) {
  function removeTodo(id){
    const uri = "http://localhost:4000/todo/"+id;
    axios.delete(uri).then((res)=>{
      axios.get("http://localhost:4000/todo/")
      .then(resp=>{props.setList(resp.data)});
    })
  }
  function addComplete(id){
    const uri = "http://localhost:4000/todo/update/"+id;
    axios.post(uri, {
      task: props.todo.task,
      completed: !(props.todo.completed)
    }).then(res=>{
      axios.get("http://localhost:4000/todo/")
      .then(resp=>{props.setList(resp.data)});
    });
  }
  return <div className="todo">
      <li className={props.todo.completed ? "todo-item completed" : "todo-item"}>{props.title}</li>
      <button className="complete-btn" onClick={()=>addComplete(props.todo._id)}
        ><i className={props.todo.completed ? "fas fa-arrow-left" : "fas fa-check"}></i></button>
      <button className="trash-btn" onClick={()=>removeTodo(props.todo._id)}><i className="fas fa-trash"></i></button>
    </div>
}
export default Todo;

// "fa-solid fa-arrow-left"