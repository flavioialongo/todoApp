
import Form from "./Form";
import data from "./test"
import ToDoList from "./ToDoList";
import { useEffect, useState } from "react";
import "./mainStyle.css"
function App(){
    const [todoList, setList] = useState(data);
    const [selection, setSelection] = useState("all");
    const [filteredTodo, setFilteredTodo]=useState(data)

    function filtered(){
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

    useEffect(()=>filtered(), [todoList,selection]);

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