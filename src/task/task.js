import {useState, useEffect} from 'react'
import {formatDistanceToNowStrict} from 'date-fns'

import NewTaskForm from '../new-task-form'

export default function Task({item, onDeleted, id, onToggleCompleted}) {
  const [timerTasks, setTimerTasks] = useState({
    timer: null,
    timeToZero: parseInt(item.min * 60) + parseInt(item.sec),
    onPlay: false,
  })

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimerTasks(
        timerTasks => ({...timerTasks, timer: formatDistanceToNowStrict(item.dateCreated, {unit: 'minute'})}),
        1000
      )
    })
    if (timerTasks.onPlay === true) {
      const intervalIdTimer = setInterval(() => {
        setTimerTasks(timerTasks => ({
          ...timerTasks,
          timeToZero: timerTasks.timeToZero - 1,
        }))
      }, 1000)
      return () => clearInterval(intervalIdTimer)
    }

    return () => clearInterval(intervalId)
  }, [timerTasks.onPlay])

  const onPlay = () => {
    setTimerTasks(timerTasks => ({
      ...timerTasks,
      onPlay: true,
    }))
  }
  const onPause = () => {
    setTimerTasks(timerTasks => ({
      ...timerTasks,
      onPlay: false,
    }))
  }

  let classNames = `${item.classLi} todo-list`
  if (item.done) {
    classNames += ' completed label '
  } else {
    classNames += ' active label'
  }
  const timeToZero =
    (timerTasks.timeToZero / 60 < 1 ? '' : `${Math.floor(timerTasks.timeToZero / 60)} min`) +
    (timerTasks.timeToZero % 60 <= 0 && timerTasks.timeToZero / 60 < 1 ? '' : ` ${timerTasks.timeToZero % 60} sec`)

  return (
    <li className={classNames} key={id}>
      <div className="view">
        <input className="toggle" type="checkbox" checked={item.done} onClick={onToggleCompleted} readOnly />
        <label>
          <span className="title" onClick={onToggleCompleted}>
            {item.description}
          </span>
          <span className="description">
            <span className="timer">{item.done ? null : timeToZero}</span>
            <button className="icon icon-play" onClick={onPlay}></button>
            <button className="icon icon-pause" onClick={onPause}></button>
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
