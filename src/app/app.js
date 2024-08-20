import {Component} from 'react'
import PropTypes from 'prop-types'

import TaskList from '../task-list'
import Footer from '../footer'
import AddItem from '../add-item'
import '../index.css'
// import { useState, useEffect } from 'react';

export default class App extends Component {
  maxId = 100
  static defaultProps = {
    defaultCreated: -1,
    done: false,
    classLi: 'active',
  }

  static propTypes = {
    maxId: PropTypes.number,
    defaultCreated: PropTypes.number,
    done: PropTypes.bool,
    classLi: PropTypes.string,
  }
  state = {
    todoItems: [],
  }
  createTodoItem(label) {
    const date = new Date()

    const defaultCreated = 0
    return {
      description: label,
      classLi: 'active',
      id: this.maxId++,
      done: false,
      dateCreated: date,
      created: `${defaultCreated} minutes ago`,
    }
  }

  deleteItem = id => {
    this.setState(({todoItems}) => {
      const idx = todoItems.findIndex(el => el.id === id)
      const newArray = todoItems.toSpliced(idx, 1)
      return {
        todoItems: newArray,
      }
    })
  }
  addExtraItem = text => {
    const newItem = this.createTodoItem(text)

    this.setState(({todoItems}) => {
      const newArray = [...todoItems, newItem]

      return {
        todoItems: newArray,
      }
    })
  }
  onToggleCompleted = id => {
    this.setState(({todoItems}) => {
      const idx = todoItems.findIndex(el => el.id === id)
      const oldItem = todoItems[idx]
      const newItem = {...oldItem, done: !oldItem.done}

      const newArray = todoItems.toSpliced(idx, 1, newItem)
      return {
        todoItems: newArray,
      }
    })
  }
  onShow = classLi => {
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
  onRemove = () => {
    let completed = [...document.querySelectorAll('.label.completed')]

    completed.map(el => el.remove())
  }
  // setTime = time => {
  //   console.log(time)
  //   const {formatDistanceToNowStrict} = require('date-fns')
  //   return formatDistanceToNowStrict(time, {unit: 'second'})
  // }

  render() {
    const {todoItems} = this.state
    const toDo = todoItems.length - todoItems.filter(el => el.done).length

    return (
      <section className="todoapp">
        <header className="header">
          <h1>Todos</h1>
          <AddItem addExtraItem={this.addExtraItem} />
        </header>
        <section className="main">
          <TaskList
            todos={todoItems}
            onDeleted={this.deleteItem}
            onToggleCompleted={this.onToggleCompleted}
            setTime={this.setTime}
          />

          <Footer toDo={toDo} onShow={this.onShow} onRemove={this.onRemove} />
        </section>
      </section>
    )
  }
}
