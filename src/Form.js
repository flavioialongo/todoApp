
import {useState} from "react"

function Form(props){

    const [inputText, setText] = useState("")

    function handleChange(event){
        setText(event.target.value)
    }
    
    function handleSubmit(event){
      event.preventDefault()
      if(!(event.target[0].value==="")){
        setText("");
        let len = props.todoList.length
        props.setList([...props.todoList, {"id":len+1, "task": event.target[0].value, "completed":false}])
      }
    }

    return(
        <form onSubmit={handleSubmit}>
      <input type="text" className="todo-input" value={inputText} onChange= {handleChange} required={true}/>
      <button className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo" onChange={(event)=>props.setSelection(event.target.value)}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>



    );
}
export default Form;
