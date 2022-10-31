import * as usersAPI from '../utilities/users-api'

export async function signUp(userData) {
    // Delegate the network request code to the users-api.js API module
    // which will ultimately return a JSON Web Token (JWT)
    const token = await usersAPI.signUp(userData);
    // Baby step by returning whatever is sent back by the server
    return token;
  }