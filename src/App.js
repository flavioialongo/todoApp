
import Form from "./Form";
import data from "./test"
import ToDoList from "./ToDoList";
import { useState } from "react";
import "./mainStyle.css"
function App(){
    const [toDoList, setList] = useState(data);

    return(
    <div className="App">       
        <header>your todo</header>
        <Form setList={setList} todoList={toDoList}/>
        <ToDoList todoList={toDoList} setList={setList}/>
    </div>
    );
}
export default App;