const NewTaskForm = ({ classLi }) => {
    console.log(classLi)
    const input = classLi === "editing" ? "edit" : "hidden"
    return <input type="text" className={input} value="Editing task"></input>
}
export default NewTaskForm