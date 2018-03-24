import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { //Navbar, Jumbotron, 
  Button
} from 'react-bootstrap';
import './style.css'

class BookingSlot extends Component {
  constructor() {
    super();

    this.state = {
      dataError: '',
      hourError: ''
    }
  }

  SaveData = (evt) => {
    // alert('YOur selected Hours: ' + this.selectDate.value);
    // alert('YOur selected Hours: ' + this.selectTime.value);
    // alert('YOur selected Hours: ' + this.selectHours.value);
    evt.preventDefault();
    const SingleSlot = {
      selectDate: this.selectDate.value,
      selectTime: this.selectTime.value,
      selectHours: this.selectHours.value
    }
    if (this.selectHours.value > 6) {
      this.state.hourError = "Time should not exceed 6-hrs";
      this.setState({ hourError: this.state.hourError });
    }
  }
  checkDate = (evt) => {
    evt.preventDefault(evt);
    var newDate = new Date();
    newDate = newDate.getFullYear() + '-' + (newDate.getMonth() + 1) + '-' + newDate.getDate();
    this.state.dataError = "Selected Date Should be current or future";
    this.setState({ dataError: this.state.dataError });
    // console.log(newDate);
    // console.log(this.selectDate.value);
  }


  render() {
    return (
      <div>
        <div className='container'>
          <h1 className='bs_head'>Book a Slot</h1>
          <Button className='btn btn-md'><span className='glyphicon glyphicon-arrow-left'></span> Back</Button>

          <form ref={(input) => { this.fieldValues = input }} onSubmit={this.SaveData}>
            <div className='row'>
              <div className='col-md-4 col-md-offset-4'>
                <label htmlFor="selectDate"> Select Date : </label>
                <input type="date" ref={(input) => { this.selectDate = input }} onChange={this.checkDate} />
                <p><span className='cred'>{this.state.dataError}</span></p>
              </div>
            </div>

            <br />
            <div className='row'>
              <div className='col-md-3 col-md-offset-3'>
                <label htmlFor="startTime"> Start Time : </label>
                <select ref={(input) => { this.selectTime = input }}>
                  <option value=" Please Select Your Time"> -- Select --</option>
                  <option value="1">01:00</option>
                  <option value="2">02:00</option>
                  <option value="3">03:00</option>
                  <option value="4">04:00</option>
                  <option value="5">05:00</option>
                  <option value="6">06:00</option>
                  <option value="7">07:00</option>
                  <option value="8">08:00</option>
                  <option value="9">09:00</option>
                  <option value="10">10:00</option>
                  <option value="11">11:00</option>
                  <option value="12">12:00</option>
                  <option value="13">13:00</option>
                  <option value="14">14:00</option>
                  <option value="15">15:00</option>
                  <option value="16">16:00</option>
                  <option value="17">17:00</option>
                  <option value="18">18:00</option>
                  <option value="19">19:00</option>
                  <option value="20">20:00</option>
                  <option value="21">21:00</option>
                  <option value="22">22:00</option>
                  <option value="23">23:00</option>
                  <option value="24">24:00</option>
                </select>
              </div>
              <div className='col-md-6'>
                <label htmlFor="selectHours"> Select Hours : </label>
                <select ref={(input) => { this.selectHours = input }}>
                  <option value=" Please Select any hour"> -- Select --</option>
                  <option value="1">1 hrs</option>
                  <option value="2">2 hrs</option>
                  <option value="3">3 hrs</option>
                  <option value="4">4 hrs</option>
                  <option value="5">5 hrs</option>
                  <option value="6">6 hrs</option>
                  <option value="7">7 hrs</option>
                  <option value="8">8 hrs</option>
                  <option value="9">9 hrs</option>
                  <option value="10">10 hrs</option>
                </select>
              </div>
            </div>
            <br />
            <br />
            <div>
              <center>
                <Button type='submit' className='btn btn-lg btn-success'>Select Slot</Button>

                <p><span className='cred'>{this.state.hourError}</span></p>
              </center>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default BookingSlot