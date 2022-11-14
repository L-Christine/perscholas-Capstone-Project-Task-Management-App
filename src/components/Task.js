
export default function Task(props) {
  const { task } = props

  return (
    <>
      <li className="taskItem">
        {task.title}
      </li>
    </>
  )
}
