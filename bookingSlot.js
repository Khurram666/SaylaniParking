import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { //Navbar, Jumbotron, 
  Button } from 'react-bootstrap';
import './BookingSlot.css'

class BookingSlot extends Component {
  render() {
    return (
      <div>
        <div className='container'>
          <h1 className='bs_head'>Book a Slot</h1>
          <Button className='btn btn-md'><span className='glyphicon glyphicon-arrow-left'></span> Back</Button>

          <div className='row'>
            <div className='col-md-4 col-md-offset-4'>
              <label htmlFor="selectDate"> Select Date : </label>
              <input type="date" name='selectDate' />
            </div>
          </div>
<br/>
          <div className='row'>
            <div className='col-md-3 col-md-offset-3'>
              <label htmlFor="startTime"> Start Time : </label>
              <select name="startTime" id="">
                <option value=""> -- Select --</option>
                <option value="">01:00</option>
                <option value="">02:00</option>
                <option value="">03:00</option>
                <option value="">04:00</option>
                <option value="">05:00</option>
                <option value="">06:00</option>
                <option value="">07:00</option>
                <option value="">08:00</option>
                <option value="">09:00</option>
                <option value="">10:00</option>
                <option value="">11:00</option>
                <option value="">12:00</option>
                <option value="">13:00</option>
                <option value="">14:00</option>
                <option value="">15:00</option>
                <option value="">16:00</option>
                <option value="">17:00</option>
                <option value="">18:00</option>
                <option value="">19:00</option>
                <option value="">20:00</option>
                <option value="">21:00</option>
                <option value="">22:00</option>
                <option value="">23:00</option>
                <option value="">24:00</option>
              </select>
            </div>
            <div className='col-md-6'>
              <label htmlFor="selectHours"> Select Hours : </label>
              <select name="selectHours" id="">
                <option value=""> -- Select --</option>
                <option value="">1 hrs</option>
                <option value="">2 hrs</option>
                <option value="">3 hrs</option>
                <option value="">1 hrs</option>
                <option value="">4 hrs</option>
                <option value="">5 hrs</option>
                <option value="">6 hrs</option>
                <option value="">7 hrs</option>
                <option value="">8 hrs</option>
                <option value="">9 hrs</option>
                <option value="">10 hrs</option>
              </select>
            </div>
          </div>
<br/>
<br/>
          <div>
            <center>
            <Button className='btn btn-lg btn-success'>Select Slot</Button>
            
            <p><span className='cred'>Time should not exceed 10-hrs</span></p>
            </center>
          </div>

        </div>
      </div>
    )
  }
}

export default BookingSlot
