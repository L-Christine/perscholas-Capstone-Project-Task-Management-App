import { useState } from 'react'
import axios from 'axios'
import moment from 'moment';
import { FaWindowClose } from 'react-icons/fa'
import Table from 'react-bootstrap/Table';


export default function TaskItem({ task, deleteTask }) {
    const [completed, setCompleted] = useState(task.completed)
    const [loading, setLoading] = useState(false);

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
      <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th></th>
          <th></th>
          <th>Task</th>
          <th>Status</th>
          <th>Created At</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <FaWindowClose color="red" type="submit" value='delete' className='deleteBtn' onClick={() => deleteTask(task._id)}/></td>
          <td>
            <div className='checkbox' role="checkbox" aria-checked onChange={handleCheckbox}>
            <input type="checkbox" checked={completed} disabled={loading} /> 
            </div>
          </td>
          <td><span>{task.text}</span></td>
          <td>{completed ? 'Complete' : 'In Progress'}</td>
          <td>{/* npm moment helps format time and date */}
          {moment(task.createdAt).format('MM/DD/YYYY')}</td>
        </tr>
      </tbody>
    </Table>

      // <tr className='taskItem'>
      //   <td className='taskName'>
      //     <div className='checkbox' role="checkbox" aria-checked onChange={handleCheckbox}>
      //       <input type="checkbox" checked={completed} disabled={loading} />
      //     </div>
      //     <p>{task.text}</p>
      //   </td>

      //   <td>
      //     {completed ? 'Complete' : 'In Progress'}
      //   </td>

      //   <td>
      //     {/* npm moment helps format time and date */}
      //     {moment(task.createdAt).format('MM/DD/YYYY')}
      //   </td>

      //   <td>
      //     <button type="submit" value='delete' className='deleteBtn' onClick={() => deleteTask(task._id)}><FaWindowClose color="red"/></button>
      //   </td>
      // </tr>
    );
  }

