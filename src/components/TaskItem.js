import { useState } from 'react'
import axios from 'axios'
import moment from 'moment';
import { FaWindowClose, FaEdit } from 'react-icons/fa'
import Table from 'react-bootstrap/Table';
import EditModal from './EditModal'


export default function TaskItem({ task, deleteTask }) {
    const [completed, setCompleted] = useState(task.completed)
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);

    async function handleCheckbox() {
        setLoading(true);
        //completed default is false (not checked) !completed == true
        await axios.put(`/api/tasks/${task._id}`, {
          completed: !completed,
        });
        setCompleted(!completed);
        setLoading(false);
    };
  
    return (
      <Table bordless hover>
      <thead>
        <tr>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          {/* Delete Button */}
          <td>
            <FaWindowClose color="red" type="submit" value='delete' className='deleteBtn' onClick={() => deleteTask(task._id)}/>
          </td>
          {/* Edit Button */}
          <td>
            <FaEdit color='orange' type="button" value='edit' onClick={() => setShow(true)}/>
            <EditModal show={show} setShow={setShow} />
          </td>
          {/* Checkbox */}
          <td>
            <div className='checkbox' role="checkbox" aria-checked onChange={handleCheckbox}>
            <input type="checkbox" checked={completed} disabled={loading} readOnly /> 
            </div>
          </td>
          {/* Task */}
          <td>
            <span>{task.text}</span>
          </td>
          {/* Status */}
          <td>
            {completed ? 'Complete' : 'In Progress'}
          </td>
          {/* Date- moment helps format time and date */}
          <td>
            {moment(task.createdAt).format('MM/DD/YYYY')}
          </td>
        </tr>
      </tbody>
    </Table>
    );
  }

