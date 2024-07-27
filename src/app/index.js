import { Component } from "react"

import TaskList from '../task-list'
import Footer from '../footer'
// import TaskList from './task-list'
import "../index.css"
import AddItem from '../add-item'

export default class App extends Component{
    state = {
        todoItems: [
            {
                description: "Completed task",
                created: "created 17 seconds ago",
                classLi: "completed",
                id: 1
            },
            {
                description: "Editing task",
                created: "created 5 minutes ago",
                classLi: "editing",
                id: 2
            },
            {
                description: "Active task",
                created: "created 5 minutes ago",
                classLi: "active",
                id: 3
            },
        ]
    }

    deleteItem = (id) => {
        this.setState(({todoItems}) =>
        {
            const idx = todoItems.findIndex((el) => el.id === id)
            // console.log(idx)
            // todoItems.splice(idx, 1);
           
            // const newArray = [
            //     ...todoItems.slice(0, idx),
            //      ...todoItems.slice(idx + 1)]
            const newArray = todoItems.toSpliced(idx,1)
            return {
                todoItems: newArray
            }
        }
        )
    }
   
     render () {return (
        <section className="todoapp">
            <header className="header">
                <h1>Todos</h1>
                <input
                    className="new-todo"
                    placeholder="What needs to be done?"
                    autofocus
                ></input>
            </header>
            <section className="main">
                <TaskList todos={this.state.todoItems} onDeleted = { this.deleteItem}/>
                <AddItem/>
                <Footer />
            </section>
        </section>
    )}
    
}