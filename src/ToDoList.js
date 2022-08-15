import React from "react";
import Todo from "./Todo";

function ToDoList(props){
        return(
            <div className="todo-container">
                <ul className="todo-list">
                {props.filteredTodo.map((todo)=>{
                        return (
                            <Todo 
                             key={todo._id}
                             title={todo.task} 
                             setList = {props.setList} 
                             todoList = {props.todoList} 
                             todo={todo}
                            />
                        );
                })}
                </ul>
            </div>
    );

    
}
export default ToDoList;