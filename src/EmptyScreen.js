import "./emptystyle.css"
import Form from "./Form";
function EmptyScreen(){
    return <div className="emptyMain">
    <h1>You have nothing ToDo!</h1>
    <h3>add something</h3>
    <Form />
    </div>
}

export default EmptyScreen;