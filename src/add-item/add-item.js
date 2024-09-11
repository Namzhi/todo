import {useState} from 'react'

export default function AddItem(props) {
  const [formData, setFormData] = useState({
    label: '',
    min: '',
    sec: '',
  })
  const onChangeText = e => {
    const {name, value} = e.target

    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }))
  }
  const onSubmit = e => {
    e.preventDefault()
    const min = formData.min !== '' ? formData.min : 0
    const sec = formData.sec !== '' ? formData.sec : 0
    props.addExtraItem(formData.label, min, sec)
    setFormData({
      label: '',
      min: '',
      sec: '',
    })
  }

  return (
    <form className="new-todo-form" onSubmit={onSubmit} autoFocus>
      <input
        name="label"
        className="new-todo"
        placeholder="Task"
        onChange={onChangeText}
        value={formData.label}
        autoFocus
      />
      <input
        name="min"
        className="new-todo-form__timer"
        onChange={onChangeText}
        value={formData.min}
        placeholder="Min"
        autoFocus
      />
      <input
        name="sec"
        className="new-todo-form__timer"
        onChange={onChangeText}
        value={formData.sec}
        placeholder="Sec"
        autoFocus
      />
      <button type="submit"></button>
    </form>
  )
}
