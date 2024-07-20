import { createRoot } from "react-dom/client"
import TaskList from './src/task-list'
import Footer from './src/footer'
// import TaskList from './task-list'
import "./index.css"


const App = () => {
    const todoItems = [
        {
            description: "Completed task",
            created: "created 17 seconds ago",
            classLi: "completed",
        },
        {
            description: "Editing task",
            created: "created 5 minutes ago",
            classLi: "editing",
        },
        {
            description: "Active task",
            created: "created 5 minutes ago",
            classLi: "active",
        },
    ]
    return (
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
                <TaskList todos={todoItems} />
                <Footer />
            </section>
        </section>
    )
}

createRoot(document.getElementById("root")).render(<App />)
