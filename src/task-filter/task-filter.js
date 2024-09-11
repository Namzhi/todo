export default function TasksFilter({item, onShow}) {
  let classLi = item.classLi ? item.classLi : null
  return (
    <li>
      <button className={classLi} onClick={() => onShow(classLi)}>
        {item.text}
      </button>
    </li>
  )
}
