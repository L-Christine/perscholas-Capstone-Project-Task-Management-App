import * as usersAPI from '../utilities/users-api'

export async function signUp(userData) {
  try{
    // Delegate the network request code to the users-api.js API module
    // which will ultimately return a JSON Web Token (JWT)
    const token = await usersAPI.signUp(userData);
    //persist the 'token'
    localStorage.setItem('token', token)
    //update 
    return getUser()
  } catch (err) {
    console.log(err);
  }
}

export function getToken() {
  //get token from local storage
  const token = localStorage.getItem('token')
  if (!token) return null;

  //if we have a token, change a string to an object. payload starts after . in encoded token
  const payload = JSON.parse(atob(token.split('.')[1])) //index 1 b/c token has 3 section (header, payload, signature). payload is [1]

  // A JWT's exp is expressed in s, not ms, so convert. 1 day in sec == token expired
  if (payload.exp < Date.now() /1000){
    // Token has expired - remove it from localStorage
    localStorage.removeItem('token')
    return null
  }
  return token //token returned if token is valid
}

//if you have a token, then sign in. if not, you get null
export function getUser() {
  const token = getToken()
  return token ? JSON.parse(atob(token.split('.')[1])).user : null
}

export function logOut() {
  localStorage.removeItem('token')
}

export async function logIn(credentials) {
  try{
    // Delegate the network request code to the users-api.js API module
    // which will ultimately return a JSON Web Token (JWT)
    const token = await usersAPI.logIn(credentials);
    //persist the 'token'
    localStorage.setItem('token', token)
    //update 
    return getUser()
  } catch (err) {
    console.log(err);
  }
}
