import {Component} from 'react'

import NewTaskForm from '../new-task-form'

export default class Task extends Component {
  state = {
    timer: null,
  }
  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({})
    }, 1000)
  }

  onPlay = as => {
    this.setState({
      timer: new Date(),
    })
    console.log(as)
  }
  onPause = () => {
    this.setState({
      timer: null,
    })
  }
  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  render() {
    const {item, onDeleted, id, onToggleCompleted} = this.props
    const {formatDistanceToNowStrict} = require('date-fns')
    const {timer} = this.state
    let classNames = `${item.classLi} todo-list`
    if (item.done) {
      classNames += ' completed label '
    } else {
      classNames += ' active label'
    }
    const time = timer === null ? null : formatDistanceToNowStrict(timer, {unit: 'second'})

    return (
      <li className={classNames} key={id}>
        <div className="view">
          <input className="toggle" type="checkbox" checked={item.done} readOnly />
          <label>
            <span className="title" onClick={onToggleCompleted}>
              {item.description}
            </span>
            <span className="description">
              <span className="timer">{time}</span>
              <button className="icon icon-play" onClick={this.onPlay}></button>
              <button className="icon icon-pause" onClick={this.onPause}></button>
            </span>
            <span className="created description">{`created ${formatDistanceToNowStrict(item.dateCreated, {unit: 'minute'})} ago`}</span>
          </label>
          <button className="icon icon-edit"></button>
          <button className="icon icon-destroy" onClick={onDeleted}></button>
        </div>
        <NewTaskForm classLi={item.classLi} />
      </li>
    )
  }
}
