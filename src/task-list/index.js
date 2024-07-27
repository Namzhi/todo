import { Component } from 'react'
import Task from '../task'
export default class TaskList extends Component {
    render () {
    const {todos, onDeleted} = this.props;
    // onDeleted();
    const todoList = todos.map((item) => {
        const {id, ...itemProps} = item;
        // onDeleted(item.id)
        // console.log(id)
        return (
           
         <Task item={itemProps} onDeleted = {() => onDeleted(id)}/>
        
        )
    })

    return <ul className="todo-list">{todoList}</ul>
}
}