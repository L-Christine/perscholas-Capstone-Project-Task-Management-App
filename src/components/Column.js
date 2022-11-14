import Task from "./Task"
import sortOrder from "../utilities/sortOrder"

export default function Column(props) {
  const { column } = props
  // sort by id
  const tasks = sortOrder(column.tasks, column.taskOrder, 'id' )

  return (
    <div className='column'>
        <header>{column.title}</header>
        <ul className="taskList">
            {tasks && tasks.length > 0 && tasks.map((task, index) => {
              return(
                <Task key={task.id} task={task} />
              )
            })}
        </ul>
        <footer>Add New Task</footer>
    </div>
  )
}