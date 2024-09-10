import {Component} from 'react'

import NewTaskForm from '../new-task-form'

export default class Task extends Component {
  state = {
    timer: null,
    timeToZero: parseInt(this.props.item.min * 60) + parseInt(this.props.item.sec),
    onPlay: false,
  }
  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({})
    }, 1000)
  }

  onPlay = () => {
    if (!this.state.onPlay) {
      this.intervalIdTimer = setInterval(() => {
        this.setState(state => ({
          onPlay: true,
          timeToZero: state.timeToZero - 1,
        }))
      }, 1000)
    }
  }
  onPause = () => {
    clearInterval(this.intervalIdTimer)
    this.setState({
      timerTo: null,
      onPlay: false,
    })
  }
  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  render() {
    const {item, onDeleted, id, onToggleCompleted} = this.props
    const {formatDistanceToNowStrict} = require('date-fns')
    let classNames = `${item.classLi} todo-list`
    if (item.done) {
      classNames += ' completed label '
    } else {
      classNames += ' active label'
    }
    const timeToZero =
      (this.state.timeToZero / 60 < 1 ? '' : `${Math.floor(this.state.timeToZero / 60)} min`) +
      (this.state.timeToZero % 60 <= 0 && this.state.timeToZero / 60 < 1 ? '' : ` ${this.state.timeToZero % 60} sec`)
    return (
      <li className={classNames} key={id}>
        <div className="view">
          <input className="toggle" type="checkbox" checked={item.done} onClick={onToggleCompleted} readOnly />
          <label>
            <span className="title" onClick={onToggleCompleted}>
              {item.description}
            </span>
            <span className="description">
              <span className="timer">{timeToZero}</span>
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
