import { useState } from 'react'
import TaskForm from './TaskForm'

export default function TaskBoard() {
  const [taskList, setTaskList] = useState([])
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const saveTask = (taskObject) => {
    taskList.push(taskObject)
    setTaskList(taskList)
    setShowModal(false)
  }

  return (
    <> 
      <div>
        <h1>TaskBoard</h1>
        {/* <button onClick={()=>setShowModal(true)}>Create Task</button> */}
      </div>

      <div className='task-container'>
        {taskList.map((object) => <li>{object.Title}</li>)}
      </div>
      
      <TaskForm showModal={showModal} handleShow={handleShow} handleClose={handleClose} saveTask={saveTask} />
    </>
  )
}
