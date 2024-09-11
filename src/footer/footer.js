import TasksFilter from '../task-filter'
export default function Footer(props) {
  const {toDo, onShow, onRemove} = props
  const filterItem = [
    {classLi: 'all selected', text: 'All', key: 0},
    {classLi: 'active', text: 'Active', key: 1},
    {
      classLi: 'completed',
      text: 'Completed',
      key: 2,
    },
  ]
  const filterList = filterItem.map(item => {
    return <TasksFilter item={item} onShow={onShow} key={item.key} />
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
