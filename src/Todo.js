import React from 'react';
import axios from "axios"
function Todo(props) {
  function removeTodo(id){
    const uri = process.env.url+"/home/"+id;
    axios.delete(uri, {headers:props.auth_header}).then(()=>props.setList(props.todoList.filter(x=>x._id!==props.todo._id)));
  }
  function addComplete(id){
    const uri = process.env.url + "/home/update/"+id;
    axios.post(uri, {
      task: props.todo.task,
      completed: !(props.todo.completed)
    }, {headers:props.auth_header}).then(()=>props.setList(props.todoList.map(x=>{
      if(x._id===id){
        return {...x, completed: !x.completed}
      }else{
        return x;
      }
    })));
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