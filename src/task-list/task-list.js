import Task from '../task'
export default function TaskList({todos, onDeleted, onToggleCompleted}) {
  const todoList = todos.map(item => {
    const {id, ...itemProps} = item

    return (
      <Task item={itemProps} key={id} onDeleted={() => onDeleted(id)} onToggleCompleted={() => onToggleCompleted(id)} />
    )
  })

  return <ul className="todo-list">{todoList}</ul>
}
