import {Component} from 'react'

export default class AddItem extends Component {
  state = {
    label: '',
    min: '',
    sec: '',
  }
  onChangeText = e => {
    const {name, value} = e.target
    this.setState({
      [name]: value,
    })
  }
  onSubmit = e => {
    e.preventDefault()
    this.props.addExtraItem(this.state.label, this.state.min, this.state.sec)
    this.setState({
      label: '',
      min: '',
      sec: '',
    })
  }

  render() {
    return (
      <form className="new-todo-form" onSubmit={this.onSubmit} autoFocus>
        <input
          name="label"
          className="new-todo"
          placeholder="Task"
          onChange={this.onChangeText}
          value={this.state.label}
          autoFocus
        />
        <input
          name="min"
          className="new-todo-form__timer"
          onChange={this.onChangeText}
          value={this.state.min}
          placeholder="Min"
          autoFocus
        />
        <input
          name="sec"
          className="new-todo-form__timer"
          onChange={this.onChangeText}
          value={this.state.sec}
          placeholder="Sec"
          autoFocus
        />
        <button type="submit"></button>
      </form>
    )
  }
}
