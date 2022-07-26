
import "./todostyle.css"


function Todo(props) {
  return <div className="todoMain">
      <h1>{props.title}</h1>
    <div className="todo">
      <div className="desc">
        <h3>{props.desc}</h3>
      </div>
      <div className="status">
        <h3>done</h3>
      </div>
    </div>
     
    
    </div>
}

export default Todo;
