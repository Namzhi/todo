import { Component } from "react"
import TasksFilter from "../task-filter"
export default class Footer extends Component {
   render() {
      const { toDo, onShow, onRemove } = this.props
      const filterItem = [
         { classLi: "selected", text: "All" },
         { classLi: "active", text: "Active" },
         {
            classLi: "completed",
            text: "Completed",
         },
      ]
      const filterList = filterItem.map((item) => {
         return <TasksFilter item={item} onShow={onShow} />
      })
      return (
         <footer className="footer">
            <span className="todo-count">{toDo} items left</span>
            <ul className="filters">{filterList}</ul>
            <button className="clear-completed" onClick={onRemove}>
               Clear completed
            </button>
         </footer>
      )
   }
}