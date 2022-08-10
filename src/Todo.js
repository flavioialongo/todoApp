function Todo(props) {
  return <div className="todo">
      <li className="todo-item" style={{textDecoration: props.completed ? "line-through" : "none"}}>{props.title}</li>
      <button className="complete-btn" onClick={
        ()=>{
          props.addComplete(props.index);
        }
        }
        ><i className={props.selection !== "completed" ? "fas fa-check" : "fas fa-arrow-left"}></i></button>
      <button className="trash-btn" onClick={()=>props.removeTodo(props.index)}><i className="fas fa-trash"></i></button>
    </div>
}
export default Todo;

// "fa-solid fa-arrow-left"