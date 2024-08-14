import { Component } from "react"
import Task from "../task"
export default class TaskList extends Component {
   render() {
      const { todos, onDeleted, onToggleCompleted } = this.props

      const todoList = todos.map((item) => {
         const { id, ...itemProps } = item

         return (
            
               <Task
                  item={itemProps}
                  id = {id}
                  onDeleted={() => onDeleted(id)}
                  onToggleCompleted={() => onToggleCompleted(id)}
               />
            
         )
      })

      return <ul className="todo-list">{todoList}</ul>
   }
}
