import React, { useState, useEffect } from 'react';
import TaskItem from './TaskItem';
import Button from 'react-bootstrap/Button';
import { createTask, readTask, deleteTask } from '../utilities/tasks-service'

export default function TaskList() {
  const [taskList, setTaskList] = useState([]);
  const [newTask, setNewTask] = useState('');
  
  const [showAddTaskForm, setShowAddTaskForm] = useState(false);

  const showForm = () => {
    setShowAddTaskForm(!showAddTaskForm);
  };

//====Function: Get all tasks from DB
  async function getTasks() {
    try {
      const { task } = await readTask({});
      setTaskList(task);
    } catch (err) {
      console.log(err);
    }
  };

  //updates after adding a new task
  useEffect(() => {
    getTasks();
  }, []);

//====Function: Create a new task
  async function addNewTask(e) {
    e.preventDefault();
    //createTask fx from tasks-service in utility
    const { data } = await createTask({ text: newTask , completed: false });
    setShowAddTaskForm(false);
    setNewTask('');
    //add new data to the taskList
    setTaskList([{ ...data }, ...taskList]);
  };

//====Function: Delete a task
  async function deleteTheTask(id) {
    try {
      await deleteTask();
      setTaskList(taskList.filter((task) => task._id !== id));
    } catch (err) {
      console.log(err);
    }
  };
//====return
  return (

    <div>
      <h1>Tasks</h1>
      <div className='addBar'>
        <button type="button" className='addBtn' onClick={showForm}>
          New Task
        </button>
      </div>
      <div>

      </div>
      <form className="newTaskForm" onSubmit={addNewTask}>
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <Button variant="primary" type="submit">Submit</Button>
      </form>

      {taskList ? (
        <table className='taskListTable'>
          <tbody>
            {taskList.map((task) => (
              <TaskItem key={task._id} task={task} deleteTheTask={deleteTheTask} />
            ))}
          </tbody>
        </table>
      ) : (
        'No Task Found'
      )}

    </div>
  );
}
