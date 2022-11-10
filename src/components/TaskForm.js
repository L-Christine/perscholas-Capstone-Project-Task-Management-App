import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

export default function TaskForm({ showModal, handleShow, handleClose, saveTask }) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [dueDate, setDueDate] = useState('')

    const handleChange = (evt) => {
      //check name, value of the target  
      const { name, value } = evt.target
      //when the name matches, you can update the value of the target
        if (name === 'title'){
          setTitle(value)
        } else if (name === 'description'){
          setDescription(value)
        } else {
          setDueDate(value)
        }
    }

    const handleSave = () => {
        let taskObject = {}
        taskObject['Title'] = title
        taskObject['Description'] = description
        taskObject['DueDate'] = dueDate
        //push taskObject to taskList
        saveTask(taskObject) 
    }

    return (
    <>
    <Button variant="primary" onClick={handleShow}>
      Modal
    </Button>

    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>

      <Form>
        
      <Form.Group className="mb-3" controlId="formTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" name="title" value={title} onChange={handleChange}/>
      </Form.Group>
      <br />
      <Form.Group className="mb-3" controlId="formDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control type="textbox" name="description" value={description} onChange={handleChange}/>
      </Form.Group>
      <br />
      <Form.Group className="mb-3" controlId="formDueDate">
        <Form.Label>Due Date</Form.Label>
        <Form.Control type="date" name="dueDate" value={dueDate} onChange={handleChange}/>
      </Form.Group>

      <Button variant="primary" type="submit">Submit</Button>
      </Form>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="primary" onClick={handleClose}>Save</Button>
      </Modal.Footer>
    </Modal>
    </>

  )
}
