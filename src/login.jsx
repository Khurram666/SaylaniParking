import React, { Component } from 'react'

class Login extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="col-md-6">
            <div className="wrapper">
              <form action="" method="post"> <br />
                <h3>Welcome Back! Please Sign In</h3>
                
                <input type="text" className="form-control" name="Username" placeholder="Username" required />
                <input type="password" className="form-control" name="Password" placeholder="Password" required />

                <button className="btn btn-lg btn-success btn-block" name="Submit" value="Login" type="Submit">Login</button>
                <button className="btn btn-lg btn-info btn-block" name="Submit" value="Login" type="Submit">Registor</button>
              </form>
            </div>
          </div>
        </div>



      </div>
    )
  }
}

export default Login;