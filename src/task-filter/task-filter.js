import {Component} from 'react'

export default class TasksFilter extends Component {
  render() {
    const {item, onShow} = this.props
    let classLi = item.classLi ? item.classLi : null
    // let className = classLi + ' selected'
    return (
      <li>
        <button className={classLi} onClick={() => onShow(classLi)}>
          {item.text}
        </button>
      </li>
    )
  }
}
