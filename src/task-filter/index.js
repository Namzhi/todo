const TasksFilter = ({ item }) => {
    let classLi = item.classLi ? item.classLi : null
    return (
        <li>
            <button className={classLi}>{item.text}</button>
        </li>
    )
}
export default TasksFilter