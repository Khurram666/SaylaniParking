import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <div>


        <div className="container">
          <div className="wrapper">
            <form action="" method="post" name="Login_Form" class="form-signin">
              <h3 className="form-signin-heading">Welcome Back! Please Sign In</h3>
              <hr className="colorgraph" />
              <br/>

                <input type="text" className="form-control" name="Username" placeholder="Username" required autofocus />
                <input type="password" className="form-control" name="Password" placeholder="Password" required />

                <button className="btn btn-lg btn-success btn-block" name="Submit" value="Login" type="Submit">Login</button>
                <button className="btn btn-lg btn-info btn-block" name="Submit" value="Login" type="Submit">Registor</button>  			  			
		</form>			
	</div>
</div>



          </div>
          )
  }
}

export default App;
