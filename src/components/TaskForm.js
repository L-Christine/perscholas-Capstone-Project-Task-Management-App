import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function TaskForm({ showModal, handleShow, handleClose, saveTask }) {
    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')

    const handleChange = (e) => {
        const { name, value } = e.target

        if (name === 'taskTitle'){
            setTaskTitle(value)
        } else {
            setTaskDescription(value)
        }
    }

    const handleSave = () => {
        let taskObject = {}
        taskObject['Title'] = taskTitle
        taskObject['Description'] = taskDescription
        //push taskObject to taskList
        saveTask(taskObject) 
    }

    return (
    <>
      <Button variant="primary" onClick={handleShow}>
        modal
      </Button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form>

            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    
  )
}
