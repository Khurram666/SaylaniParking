import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
class Table extends React.Component{
  
  render(){
    return(
      <div className="container">
  <h2>Booking Details</h2>
  <table class="table">
    <thead>
      <tr className="bg-danger">
        <th>Section</th>
        <th>Slot</th>
        <th>Data</th>
        <th>Start Time</th>
        <th>End Time</th>
        <th>Total Hours</th>
      </tr>
    </thead>
    <tbody>
      <tr className="warning">
        <td>G1</td>
        <td>slot 3</td>
        <td>2016-12-24</td>
        <td>14:00</td>
        <td>17:00</td>
        <td>3 hrs</td>
      </tr>
      <tr className="info">
      <td>G1</td>
        <td>slot 1</td>
        <td>2017-1-24</td>
        <td>14:00</td>
        <td>17:00</td>
        <td>3 hrs</td>
      </tr>
      <tr className="warning">
      <td>G3</td>
        <td>slot 19</td>
        <td>2017-12-24</td>
        <td>15:00</td>
        <td>17:00</td>
        <td>3 hrs</td>
      </tr>
      <tr className="active">
      <td>G4</td>
        <td>slot 2</td>
        <td>2016-12-24</td>
        <td>14:00</td>
        <td>17:00</td>
        <td>3 hrs</td>
      </tr>
      <tr className="warning">
      <td>G1</td>
        <td>slot 2</td>
        <td>2016-12-24</td>
        <td>14:00</td>
        <td>17:00</td>
        <td>3 hrs</td>
      </tr>
    </tbody>
  </table>
</div>
    )
  }
}
ReactDOM.render(<Table data={this.data} />,document.getElementById('root'));