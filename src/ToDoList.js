import React from "react";
import Todo from "./Todo";

function ToDoList(props){

    function removeTodo(index){
        // ELIMINANDO IL TODO NON SI CAMBIA L INDICE DELL ARRAY
        let res = props.todoList.filter((x,y) => { return y !== index; });
        props.setList(res);
    }
    return(
        <div className="todo-container">
            <ul className="todo-list">
            {props.todoList.map((todo, step)=>{
                return (
                    <Todo  key={step} title={todo} index = {step} removeTodo={removeTodo}/>
                );
            })}
            </ul>
        </div>
);
}
export default ToDoList;