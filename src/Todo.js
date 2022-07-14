
import "./todostyle.css"


function Todo(props) {
  return <div className="todoMain">
      <h1>{props.title}</h1>
    <div className="todo">
      <h3>{props.desc}</h3>
      <h3>done</h3>
    </div>
     
    
    </div>
}

export default Todo;
