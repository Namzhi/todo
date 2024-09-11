export default function NewTaskForm(props) {
  const {classLi} = props
  const input = classLi === 'editing' ? 'edit' : 'hidden'
  return <input type="text" className={input}></input>
}
