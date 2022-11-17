const BASE_URL="/api/tasks"

export function createTask(userTask){
    return sendRequest(BASE_URL, 'POST', userTask)
}

export function readTask(){
    return sendRequest(BASE_URL, 'GET')
}

export function updateTask(id){
    return sendRequest(`BASE_URL/${editTask._id}`, 'PUT', editTask)
}

export function deleteTask(id){
    return sendRequest(`BASE_URL/${editTask._id}`, 'DELETE', editTask)
}

/*--- Helper Functions ---*/

async function sendRequest(url, method = 'GET', payload = null) {
    const options = { method };
    if (payload) {
        options.headers = { 'Content-Type': 'application/json'};
    options.body = JSON.stringify(payload);
  }

    const res = await fetch(url, options);
    if (res.ok) return res.json();
    throw new Error('Bad Request');
}