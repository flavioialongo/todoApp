import React from "react";
import Todo from "./Todo";
import {useState} from "react"


function ToDoList(props){

    function removeTodo(index){
        let res = props.todoList.filter((x,y) => { return y !== index; });
        props.setList(res);
    }

    function completed(index){
        props.setCompletedTodos([...props.completedTodos, props.todoList[index]]);
        uncompleted();
    }
    function uncompleted(){
        let difference = props.todoList.filter(x => !props.completedTodos.includes(x));
        props.setUncompletedTodos([difference]);
    }
    if(props.selection==="all"){
        return(
            <div className="todo-container">
                <ul className="todo-list">
                {props.todoList.map((todo, step)=>{
                    return (
                        <Todo key={step} title={todo} index = {step} completedTodo={completed} uncompletedTodo={uncompleted} removeTodo={removeTodo}/>
                    );
                })}
                </ul>
            </div>
    );
    }else if(props.selection==="completed"){
        return(<div className="todo-container">
        <ul className="todo-list">
        {props.completedTodos.map((todo, step)=>{
            return (
                <Todo key={step} title={todo} index = {step} completedTodo={completed} uncompletedTodo={uncompleted} removeTodo={removeTodo}/>
            );
        })}
        </ul>
    </div>);
    }else if(props.selection === "uncompleted"){
        return(<div className="todo-container">
        <ul className="todo-list">
        {props.uncompletedTodos.map((todo, step)=>{
            return (
                <Todo key={step} title={todo} index = {step} completedTodo={completed} uncompletedTodo={uncompleted} removeTodo={removeTodo}/>
            );
        })}
        </ul>
    </div>);
    }
    
}
export default ToDoList;