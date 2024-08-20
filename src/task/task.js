import {Component} from 'react'

import NewTaskForm from '../new-task-form'

export default class Task extends Component {
  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({})
    }, 60000)
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  render() {
    const {item, onDeleted, id} = this.props
    const {formatDistanceToNowStrict} = require('date-fns')

    let classNames = `${item.classLi} todo-list`
    if (item.done) {
      classNames += ' completed label '
    } else {
      classNames += ' active label'
    }

    return (
      <li className={classNames} key={id}>
        <div className="view">
          <input className="toggle" type="checkbox" checked={item.done} readOnly />
          <label>
            <span className="description" onClick={this.props.onToggleCompleted}>
              {item.description}
            </span>
            <span className="created">{formatDistanceToNowStrict(item.dateCreated, {unit: 'minute'})}</span>
          </label>
          <button className="icon icon-edit"></button>
          <button className="icon icon-destroy" onClick={onDeleted}></button>
        </div>
        <NewTaskForm classLi={item.classLi} />
      </li>
    )
  }
}
