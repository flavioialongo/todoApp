import "./appStyle.css"
import Form from "./Form";
import data from "./test"
import ToDoList from "./ToDoList";
import { useState } from "react";
function App(){
    const [toDoList, setList] = useState(data);

    return <div className="main">
        <Form/>
    <div className="content">
        <ToDoList todoList={toDoList} setList={setList}/>
    </div>   
    </div>
}
export default App;