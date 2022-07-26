import React from "react";
import Todo from "./Todo";
const ToDoList = ({todoList})=>{
    return(
        <div>
            {todoList.map(todo=>{
                console.log(todo);
                return (<Todo key={todo.id} title={todo.task} desc={todo.description}/>);
            })}
        </div>);
}

export default ToDoList;