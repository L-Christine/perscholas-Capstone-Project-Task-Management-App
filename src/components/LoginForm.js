import { useState } from 'react';
import * as usersService from '../utilities/users-service';

export default function LoginForm({ setUser }) {
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })

const [error, setError] = useState('')

function handleChange(evt) {
    setCredentials({...credentials, [evt.target.name]: evt.target.value})
    setError('')
}

async function handleSubmit(evt) {
    //prevent form from being submitted to the server
    evt.preventDefault()
    try{
        //promise returned by the signUp service method will resolve to the user object included in the payload of the JWT
        const user = await usersService.login(credentials)
        setUser(user)
    } catch {
        setError('Login failed - Try Again')
    }
}

return (
    <div>
      <div className="form-container" onSubmit={handleSubmit}>
        <form autoComplete="off" >

          <label>Email</label>
          <input type="text" name="email" value={credentials.email} onChange={handleChange} required />

          <label>Password</label>
          <input type="password" name="password" value={credentials.password} onChange={handleChange} required />

          <button type="submit">LOG IN</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}