import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

export default function EditModal({ show, setShow }) {

  return (
    <>
      <Modal show={show} backdrop="static" onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form>
            <Form.Group className="mb-3" >
              <Form.Label>Task</Form.Label>
              <Form.Control/>
            </Form.Group>
            <br />
            <Form.Group className="mb-3">
              <Form.Check type="checkbox" label="Completed" />
              </Form.Group>
          </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" type="submit">
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}