import {Component} from 'react';
import NewTaskForm from '../new-task-form';

export default class Task extends Component {
  render() {
    const {item, onDeleted, onToggleCompleted, id} = this.props;
    let classNames = `${item.classLi} todo-list`;
    if (item.done) {
      classNames += ' completed label';
    } else {
      classNames += ' active label';
    }
    const {formatDistanceToNowStrict} = require('date-fns');
    return (
      <li className={classNames} key={id}>
        <div className="view">
          <input className="toggle" type="checkbox"></input>
          <label>
            <span className="description" onClick={onToggleCompleted}>
              {item.description}
            </span>
            <span className="created">
              {formatDistanceToNowStrict(item.dateCreated, {unit: 'minute'})}
            </span>
          </label>
          <button className="icon icon-edit"></button>
          <button className="icon icon-destroy" onClick={onDeleted}></button>
        </div>
        <NewTaskForm classLi={item.classLi} />
      </li>
    );
  }
}
