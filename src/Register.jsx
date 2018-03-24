import React, { Component } from 'react'

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }


  render() {
    return (
        <div>
            <h2><center>Register Form</center></h2>
      <form className="form" onSubmit={this.handleSubmit}>
      <div className="col-md-5">
      <div className="form-group">
        <label>Name:</label>
          <input type="text" value={this.state.value}  className="form-control"  onChange={this.handleChange} />
        
        </div>

         <div className="form-group">
        <label>Mobile No:</label>
          <input type="text" value={this.state.value}  className="form-control"  onChange={this.handleChange} />
        </div>

         <div className="form-group">
        <label>Class </label>
          <input type="text" value={this.state.value}  className="form-control"  onChange={this.handleChange} />
        </div>


      
        </div>


  <div className="col-md-5 col-md-offset-2">
      <div className="form-group">
        <label>Student Name</label>
          <input type="text" value={this.state.value}  className="form-control"  onChange={this.handleChange} />
        
        </div>

         <div className="form-group">
        <label>Email</label>
          <input type="text" value={this.state.value}  className="form-control"  onChange={this.handleChange} />
        </div>

         <div className="form-group">
        <label>DOB</label>
          <input type="text" value={this.state.value}  className="form-control"  onChange={this.handleChange} />
        </div>


        
        </div>

       <label>Gender</label><br/>
        <input type="radio" name="gender" value="male"/> male <br/>
        <input type="radio" name="gender" value="female"/> Female <br/>

        <input type="submit" className="form-control btn-success" value="Submit" />
      </form>
        </div>
    );
  }
}

export default Register;