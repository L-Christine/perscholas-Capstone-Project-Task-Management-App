import { getToken } from './users-service';

const BASE_URL="/api/tasks"

export function createTask(userTask){
    return sendRequest(BASE_URL, 'POST', userTask)
}

export function readTask(){
    return sendRequest(BASE_URL, 'GET')
}

export function updateTask(taskId, editTask){
    return sendRequest(`BASE_URL/${taskId}`, 'PUT', {taskId, editTask})
}

export function deleteTask(taskId){
    return sendRequest(`BASE_URL/${taskId}`, 'DELETE', taskId)
}

/*--- Helper Functions ---*/

async function sendRequest(url, method = 'GET', payload = null) {
    const options = { method };
    if (payload) {
      options.headers = { 'Content-Type': 'application/json' };
      options.body = JSON.stringify(payload);
    }
    const token = getToken();
    if (token) {
      // Ensure headers object exists
      options.headers = options.headers || {};
      // Add token to an Authorization header
      // Prefacing with 'Bearer' is recommended in the HTTP specification
      options.headers.Authorization = `Bearer ${token}`;
    }
    const res = await fetch(url, options);
    // res.ok will be false if the status code set to 4xx in the controller action
    if (res.ok) return res.json();
    throw new Error('Bad Request');
}