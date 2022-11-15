import { useState } from 'react'
import { updateTask } from '../utilities/tasks-service'
import moment from 'moment';

export default function TaskItem({ task, deleteTheTask }) {
    const [completed, setCompleted] = useState(task.completed)
    const [loading, setLoading] = useState(false);

    async function handleCheckbox() {
        setLoading(true);
        //completed default is false (not checked) !completed == true
        await updateTask({ completed: false });
        setCompleted(!completed);
        setLoading(false);
    };
  
    return (
      <tr className='taskItem'>
        <td className='taskName'>
          <div className='checkbox' role="checkbox" aria-checked onChange={handleCheckbox}>
            <input type="checkbox" checked={completed} disabled={loading} readOnly tabIndex={-1} />
          </div>
          <p>{task.text}</p>
        </td>

        <td>
          {completed ? 'Complete' : 'Incomplete'}
        </td>

        <td>
          {/* npm moment helps format time and date */}
          {moment(task.createdAt).format('MM/DD/YYYY')}
        </td>

        <td>
          <button type="submit" className='deleteBtn' onClick={() => deleteTheTask(task._id)}>X</button>
        </td>
      </tr>
    );
  }

