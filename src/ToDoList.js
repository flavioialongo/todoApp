import React from "react";
import Todo from "./Todo";
import {useEffect} from "react"

function ToDoList(props){
    function removeTodo(index){
        if(props.selection==="completed"){
            let remComplete = props.completedTodos.filter((x,y)=>{return y!==index});
            props.setCompletedTodos(remComplete);
            let remList = props.todoList.filter(x=>!props.completedTodos.includes(x));
            props.setList(remList);
        }else{
            let remComplete = props.todoList.filter((x,y)=>{return y!==index});
            props.setList(remComplete);
        }
    }

    function addComplete(index){

            if(!props.completedTodos.includes(props.todoList[index])){
                props.setCompletedTodos([...props.completedTodos, props.todoList[index]]);
                console.log(props.completedTodos)
            }else{
                let res = props.completedTodos.filter(x=>x!=props.completedTodos[index])
                props.setCompletedTodos(res);
            }
            props.todoList[index].completed=!props.todoList[index].completed;        
    }


    useEffect(()=>{
        let difference = props.todoList.filter(x=>!props.completedTodos.includes(x));
        props.setUncompletedTodos(difference)
    }, [props.completedTodos, props.todoList,props.setUncompletedTodos]);

    if(props.selection==="all"){
        return(
            <div className="todo-container">
                <ul className="todo-list">
                {props.todoList.map((todo, step)=>{
                    if(todo.completed){
                        return (
                            <Todo key={todo.id} completed={true} title={todo.task} selection={props.selection} index = {step} addComplete={addComplete} removeTodo={removeTodo}/>
                        );
                    }else{
                        return (
                            <Todo key={todo.id} completed={false} title={todo.task} selection={props.selection} index = {step} addComplete={addComplete} removeTodo={removeTodo}/>
                        ); 
                    }
                    
                })}
                </ul>
            </div>
    );
    }else if(props.selection==="completed"){
        return(<div className="todo-container">
        <ul className="todo-list">
        {props.todoList.map((todo, step)=>{
            if(todo.completed){
            return (
                <Todo key={todo.id} selection={props.selection} title={todo.task} index = {step} addComplete={addComplete} removeTodo={removeTodo}/>
            );}
        })}
        </ul>
    </div>);
    }else if(props.selection === "uncompleted"){
        return(<div className="todo-container">
        <ul className="todo-list">
        {props.uncompletedTodos.map((todo, step)=>{
            return (
                <Todo key={todo.id} title={todo.task} selection={props.selection} index = {step} addComplete={addComplete} removeTodo={removeTodo}/>
            );
        })}
        </ul>
    </div>);
    }
    
}
export default ToDoList;