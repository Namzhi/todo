import {useState} from 'react'

import TaskList from '../task-list'
import Footer from '../footer'
import AddItem from '../add-item'
import '../index.css'

export default function App() {
  // let maxId = 100
  const [maxId, setMaxId] = useState(100)
  const [todoItems, setTodoItems] = useState([])
  function createTodoItem(label, min, sec) {
    const date = new Date()
    setMaxId(maxId => maxId + 1)
    const defaultCreated = 0
    return {
      description: label,
      min: min,
      sec: sec,
      classLi: 'active',
      id: maxId,
      done: false,
      dateCreated: date,
      created: `${defaultCreated} minutes ago`,
    }
  }

  const deleteItem = id => {
    setTodoItems(todoItems => {
      const idx = todoItems.findIndex(el => el.id === id)
      return todoItems.toSpliced(idx, 1)
    })
  }
  const addExtraItem = (text, min = 0, sec = 0) => {
    const newItem = createTodoItem(text, min, sec)
    setTodoItems(todoItems => {
      return [...todoItems, newItem]
    })
  }
  const onToggleCompleted = id => {
    setTodoItems(todoItems => {
      const idx = todoItems.findIndex(el => el.id === id)
      const oldItem = todoItems[idx]
      const newItem = {...oldItem, done: !oldItem.done}

      return todoItems.toSpliced(idx, 1, newItem)
    })
  }
  const onShow = classLi => {
    let completed = [...document.querySelectorAll('.completed')]
    let active = [...document.querySelectorAll('.active')]
    document.querySelectorAll('.selected').forEach(el => el.classList.remove('selected'))
    let button = document.querySelector(`button.${classLi.split(' ')[0]}`)
    if (classLi.includes('active')) {
      active.map(el => el.classList.remove('hidden'))
      completed.map(el => el.classList.add('hidden'))
      button.classList.add('selected')
    } else if (classLi.includes('completed')) {
      active.map(el => el.classList.add('hidden'))
      completed.map(el => el.classList.remove('hidden'))
      button.classList.add('selected')
    } else if (classLi.includes('all')) {
      let all = [...document.querySelectorAll('.label')]
      if (all.length !== 0) {
        all.map(el => el.classList.remove('hidden'))
      }

      button.classList.add('selected')
    }
  }
  const onRemove = () => {
    let completed = [...document.querySelectorAll('.label.completed')]

    completed.map(el => el.remove())
  }
  // const {todoItems} = this.state
  const toDo = todoItems.length - todoItems.filter(el => el.done).length

  return (
    <section className="todoapp">
      <header className="header">
        <h1>Todos</h1>
        <AddItem addExtraItem={addExtraItem} />
      </header>
      <section className="main">
        <TaskList todos={todoItems} onDeleted={deleteItem} onToggleCompleted={onToggleCompleted} />

        <Footer toDo={toDo} onShow={onShow} onRemove={onRemove} />
      </section>
    </section>
  )
}
