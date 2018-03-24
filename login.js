import React, { Component } from 'react'




class App extends Component {
constructor(props) {
    super(props);
    this.state = {value: ''};
}
 handleChange=(event)=> {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      
      <div>


        <div className="container">
          <div className="wrapper">
            <form action="" method="post" name="Login_Form" className="form-signin">
              <h3>Welcome Back! Please Sign In</h3>
              <hr className="colorgraph" />
              <br/>
                <input type="text" className="form-control" name="Username" placeholder="Username" required  value={this.state.value} onChange={this.handleChange}/>
                <input type="password" className="form-control" name="Password" placeholder="Password" required value={this.state.value} onChange={this.handleChange} />

                <button className="btn btn-lg btn-success btn-block" name="Submit" value="Login" type="Submit">Login</button>
                
		</form>			
	</div>
</div>



          </div>
          )
  }
}

export default App;
