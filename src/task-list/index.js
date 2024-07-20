import Task from '../task'
const TaskList = ({ todos }) => {
    const todoList = todos.map((item) => {
        return <Task item={item} />
    })
    return <ul className="todo-list">{todoList}</ul>
}
export default TaskList