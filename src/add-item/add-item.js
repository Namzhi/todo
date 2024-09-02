import {Component} from 'react'

export default class AddItem extends Component {
  state = {
    label: '',
  }
  onChangeText = e => {
    this.setState({
      label: e.target.value,
    })
  }
  onSubmit = e => {
    e.preventDefault()
    this.props.addExtraItem(this.state.label)
    this.setState({
      label: '',
    })
  }

  render() {
    return (
      <form className="new-todo-form" onSubmit={this.onSubmit}>
        <input
          className="new-todo"
          placeholder="Task"
          onChange={this.onChangeText}
          value={this.state.label}
          autoFocus
        />
        {/* <input className="new-todo-form__timer" placeholder="Min" autoFocus />
        <input className="new-todo-form__timer" placeholder="Sec" autoFocus /> */}
      </form>
    )
  }
}
