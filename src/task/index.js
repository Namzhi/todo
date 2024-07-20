import NewTaskForm from '../new-task-form'
const Task = ({ item }) => {
    console.log({ item })
    return (
        <li className={item.classLi}>
            <div className="view">
                <input className="toggle" type="checkbox"></input>
                <label>
                    <span className="description">{item.description}</span>
                    <span className="created">{item.created}</span>
                </label>
                <button className="icon icon-edit"></button>
                <button className="icon icon-destroy"></button>
            </div>
            <NewTaskForm classLi={item.classLi} />
        </li>
    )
}
export default Task