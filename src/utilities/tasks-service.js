import * as tasksAPI from "./tasks-api"

export async function createTask(userTask){
    const createdTask = await tasksAPI.createTask(userTask)
    return createdTask
}

export async function readTask(){
    const read = await tasksAPI.readTask()
    return read
}

export async function updateTask(editTask){
    const editedTask = await tasksAPI.updateTask(editTask)
    return [editedTask]
}

export async function deleteTask(editTask){
    await tasksAPI.deleteTask(editTask)
}