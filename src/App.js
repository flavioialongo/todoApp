
import Form from "./Form";
import data from "./test"
import ToDoList from "./ToDoList";
import { useState } from "react";
import "./mainStyle.css"
function App(){
    const [toDoList, setList] = useState(data);
    const [selection, setSelection] = useState("all");
    const [completedTodos, setCompletedTodos] = useState([]);
    const [uncompletedTodos, setUncompletedTodos]=useState(data);

    return(
    <div className="App">       
        <header>your todo</header>
        <Form setSelection = {setSelection} setList={setList} todoList={toDoList}/>
        <ToDoList uncompletedTodos={uncompletedTodos} completedTodos = {completedTodos} setCompletedTodos = {setCompletedTodos} setUncompletedTodos = {setUncompletedTodos} selection = {selection} todoList={toDoList} setList={setList}/>
    </div>
    );
}
export default App;