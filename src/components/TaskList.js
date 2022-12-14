import React, { useState, useEffect } from 'react';
import axios from 'axios'
import TaskItem from './TaskItem';
// import Table from 'react-bootstrap/Table';

export default function TaskList() {
  const [taskList, setTaskList] = useState([]);
  const [newTask, setNewTask] = useState('');
  // const [upTask, setUpTask] = useState('')
//====Function: Get all tasks from DB
  async function getTasks() {
    try {
      const { data } = await axios.get('/api/tasks');
      setTaskList(data);
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
    const { data } = await axios.post('/api/tasks', { text: newTask });
    setNewTask('');
    //add new data to the taskList
    setTaskList([{ ...data }, ...taskList]);
  };
//====Function: Edit/Update an existing task
  // async function updateTask(id) {
  //   try {
  //     await axios.get(`/api/tasks/${id}`)
  //     axios.put(`/api/tasks/${id}`, { text: upTask })
  //     setUpTask('')
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }
//====Function: Delete a task
  async function deleteTask(id) {
    try {
      await axios.delete(`/api/tasks/${id}`);
      setTaskList(taskList.filter((task) => task._id !== id));
    } catch (err) {
      console.log(err);
    }
  };
//===================return
  return (


    <div className='taskBox'>
      <h1>Tasks</h1>

      <form className="newTaskForm" onSubmit={addNewTask}>
          <input
            type="text"
            placeholder='Add Task Here'
            size='50'
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button className='submitBtn' type="submit">Submit</button>
      </form>

      
      <div className='taskList'>
        {taskList && taskList.map((task) => (
        <TaskItem key={task._id} task={task} deleteTask={deleteTask} />
        ))}
      </div>

    </div>
  );
}
