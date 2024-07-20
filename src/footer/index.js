import TasksFilter from '../task-filter'
const Footer = () => {
    const filterItem = [
        { classLi: "selected", text: "All" },
        {
            text: "Active",
        },
        {
            text: "Completed",
        },
    ]
    const filterList = filterItem.map((item) => {
        return <TasksFilter item={item} />
    })
    return (
        <footer className="footer">
            <span className="todo-count">1 items left</span>
            <ul className="filters">{filterList}</ul>
            <button className="clear-completed">Clear completed</button>
        </footer>
    )
}
 
export default Footer