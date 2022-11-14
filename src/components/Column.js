import Task from "./Task"

export default function Column() {
  return (
    <div className='column'>
        <header>Section</header>
        <ul className="taskList">
            <Task />
        </ul>
        <footer>Add New Task</footer>
    </div>
  )
}