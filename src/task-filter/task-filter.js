import {Component} from 'react'

export default class TasksFilter extends Component {
  render() {
    const {item, onShow} = this.props
    let classLi = item.classLi ? item.classLi : null
    return (
      <li>
        <button className={classLi} onClick={() => onShow(item.classLi)}>
          {item.text}
        </button>
      </li>
    )
  }
}
