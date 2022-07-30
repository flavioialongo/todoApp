
import "./todostyle.css"


function Todo(props) {
  return <div className="todoMain">
      <h1>{props.title}</h1>
    <div className="todo">
      <div className="desc">
        <h3>{props.desc}</h3>
      </div>
      <div className="status">
        <button onClick={()=>{
          console.log(props.id)
          props.removeTodo(props.id)
          }}>done</button>
      </div>
    </div>
     
    
    </div>
}
export default Todo;
