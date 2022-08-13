
import Form from "./Form";
import data from "./test"
import ToDoList from "./ToDoList";
import { useEffect, useState } from "react";
import "./mainStyle.css"
function App(){
    const [todoList, setList] = useState([]);
    const [selection, setSelection] = useState("all");
    const [filteredTodo, setFilteredTodo]=useState([])

    const [title, setTitle] = useState("ur todo")

    function filter(){
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
        // fetching the GET route from the Express server which matches the GET route from server.js
      async function callBackendAPI(){
        const response = await fetch('/express_backend');
        const body = await response.json();
        if (response.status !== 200) {
          throw Error(body.message) 
        }
        return body;
      };




    useEffect(()=>{
        //getItems()
        callBackendAPI().then((res)=>setTitle(res.express)).catch(err=>console.log(err))
    }, []);
   
    useEffect(()=>{
        filter();
        //saveItems();
    }, [todoList,selection]);
 /*
    function saveItems(){
        localStorage.setItem("todos", JSON.stringify(todoList));
    }

    function getItems(){
        if(localStorage.getItem("todos") === null){
            console.log("aio")
            localStorage.setItem("todos", JSON.stringify([]));
        }else{
            let res = JSON.parse(localStorage.getItem("todos"));
            setList(res);
        }
        
    }

    */

    return(
    <div className="App">       
        <header>{title}</header>
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