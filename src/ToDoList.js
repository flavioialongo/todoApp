import React from "react";
import Todo from "./Todo";
function ToDoList(props){
    function removeTodo(index){
        // ELIMINANDO IL TODO NON SI CAMBIA L INDICE DELL ARRAY
        let res = props.todoList.filter((x,y) => { return y !== index-1; });
        props.setList(res);
    }
    return(
        <div>
            {props.todoList.map(todo=>{
                return (<Todo  key={todo.id} id = {todo.id} title={todo.task} desc={todo.description} removeTodo={removeTodo}/>);
            })}
        </div>);
}
export default ToDoList;