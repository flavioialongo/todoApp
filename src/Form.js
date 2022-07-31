import './formStyle.css'
import {useState} from "react"
function Form(props){

    const [inputText, setText] = useState("")
    function handleChange(event){
        setText(event.target.value)
    }
    
    function handleSubmit(event){
      event.preventDefault()
      setText("");
      props.setList([...props.todoList, event.target[0].value])
    }


    return(
        <form onSubmit={handleSubmit}>
      <input type="text" className="todo-input" value={inputText} onChange= {handleChange}/>
      <button className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>



    );
}
export default Form;