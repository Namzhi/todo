import { Component } from "react"
import NewTaskForm from "../new-task-form"

export default class Task extends Component {
   state = {
      done: false,
      important: false
   }

   onLabelClick = () => {
      // console.log(`Done: ${this.props.item.description}`)
      this.setState(({done}) => {
         return {
            done: !done,
         }
      })
   }
   onLabelClear = () => {
      
   }
   render() {
      const { item, onDeleted } = this.props
      const {done, important} = this.state
      let classNames = `${item.classLi} todo-list`
      if (done) {
         classNames += ' completed label'
      }
      return (
         <li className={classNames} key = {item.key}>
            <div className="view">
               <input className="toggle" type="checkbox"></input>
               <label>
                  <span className="description" onClick={this.onLabelClick}>
                     {item.description}
                  </span>
                  <span className="created">{item.created}</span>
               </label>
               <button className="icon icon-edit"></button>
               <button className="icon icon-destroy" onClick={onDeleted}></button>
            </div>
            <NewTaskForm classLi={item.classLi} />
         </li>
      )
   }
}
