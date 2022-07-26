import "./appStyle.css"
import Form from "./Form";
import data from "./test.json"
import ToDoList from "./ToDoList";
import { useState } from "react";
function App(){
    const [toDoList] = useState(data);
    return <div className="main">
        <Form/>
    <div className="content">
        <ToDoList todoList={toDoList}/>
    </div>
    
    
    </div>
}

export default App;