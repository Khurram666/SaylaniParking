import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './style.css'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      userName: 'abaid',
      password: '123'
    }

  }
  SaveData = (evt) => {
    evt.preventDefault();
    if (this.userName.value == this.state.userName && this.password.value == this.state.password) {
      console.log('your code is working');
    } else {
      this.state.error = "Your email or password is wrong";
      this.setState({ error: this.state.error });
    }
    this.fieldValues.reset();
    this.props.history.push('/booking');
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="col-md-6">
            <div className="wrapper">
              <form ref={(input) => { this.fieldValues = input }} onSubmit={this.SaveData}> <br />
                <h3>Welcome Back! Please Sign In</h3>
                <p className='cred'>{this.state.error}</p>
                <input type="text" ref={(input) => { this.userName = input }} className="form-control" placeholder="Username" required />
                <input type="password" ref={(input) => { this.password = input }} className="form-control" name="Password" placeholder="Password" required />

                <button className="btn btn-lg btn-success btn-block" name="Submit" value="Login" type="Submit">Login</button>
                <Link to='/register'>
                  <p className='btn btn-lg btn-info btn-block'> Register</p>
                </Link>

              </form>
            </div>
          </div>
        </div>



      </div>
    )
  }
}

export default Login;