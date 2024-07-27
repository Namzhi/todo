import { Component } from "react"

export default class NewTaskForm extends Component{
    render() {
        const {classLi} = this.props
        const input = classLi === "editing" ? "edit" : "hidden"
    return <input type="text" className={input} value="Editing task"></input>
    }
    
    
}
