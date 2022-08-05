function Todo(props) {
  return <div className="todo">
      <li className="todo-item">{props.title}</li>
      <button className="complete-btn" onClick={()=>{props.completedTodo(props.index); props.uncompletedTodo()}}><i className="fas fa-check"></i></button>
      <button className="trash-btn" onClick={()=>props.removeTodo(props.index)}><i className="fas fa-trash"></i></button>
    </div>
}
export default Todo;
