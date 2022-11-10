import { Component } from 'react';
import { signUp } from '../utilities/users-service'
//Flow: SignUpForm.jsx <--> users-service.js <--> users-api.js <-Internet-> server.js (Express)

export default class SignUpForm extends Component {
    // state is always an object with a property for each "piece" of state
    state = {    
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirm: '',
      error: ''
    };

    handleChange = (evt) => {
      //update anything inside the state
      this.setState({ [evt.target.name]: evt.target.value, error: '' }) 
    }
      
    handleSubmit = async (evt) => {
      //prevent form refreshing (or it will lose info)
      evt.preventDefault()

      try {
          //create the formData to send to the backend
          const formData = {
              firstName: this.state.firstName,
              lastName: this.state.lastName,
              email: this.state.email,
              password: this.state.password
          }
          //pass the formData to the SignUp function (in users-service)
          const user = await signUp(formData)
          this.props.setUser(user)
        } catch {
          //if we have an error
          this.setState({ error: "Sign Up Failed - Try Again!" })
        }
    }

    render() {
        const disable = this.state.password !== this.state.confirm;
        return (
          <div>
            <div className="form-container">
              <form autoComplete="off" onSubmit={this.handleSubmit}>
                <label>First Name</label>
                <input type="text" name="name" value={this.state.firstName} onChange={this.handleChange} required />
                {/* value is connected to state above = empty now, it will change by onChange */}

                <label>Last Name</label>
                <input type="text" name="name" value={this.state.lastName} onChange={this.handleChange} required />

                <label>Email</label>
                <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />

                <label>Password</label>
                <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />

                <label>Confirm</label>
                <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />

                <button type="submit" disabled={disable}>SIGN UP</button> 
                {/* disabled={disable} <-cannot signup until meet the req.*/}
              </form>
            </div>
            <p className="error-message">&nbsp;{this.state.error}</p>
          </div>
        );
    }
  }