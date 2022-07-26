import './formStyle.css'
function Form(){
    return(
<div className = "form">
    <form>
        <label>
        <input placeholder='inserisci ToDo' type="text" name="titolo" />
            </label>
        <label>
            <input type="text" placeholder="description" name="description"/>
        </label>
        <input type="submit" value="Submit" />
    </form>
</div>)
}
export default Form;