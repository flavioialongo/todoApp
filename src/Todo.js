function Todo(props) {
  function removeTodo(){
    props.setList(props.todoList.filter((x)=>x.id!==props.todo.id));
  }
  function addComplete(){
   props.setList(props.todoList.map((x)=>{
    if(x.id === props.todo.id){
      return {
        ...x, completed: !x.completed,
      }
    }else{
      return x;
    }
   }));
  }
  return <div className="todo">
      <li className={props.todo.completed ? "todo-item completed" : "todo-item"}>{props.title}</li>
      <button className="complete-btn" onClick={()=>addComplete()}
        ><i className={props.todo.completed ? "fas fa-arrow-left" : "fas fa-check"}></i></button>
      <button className="trash-btn" onClick={()=>removeTodo()}><i className="fas fa-trash"></i></button>
    </div>
}
export default Todo;

// "fa-solid fa-arrow-left"