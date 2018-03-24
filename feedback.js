import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
class Feedback extends React.Component{
  
  render(){
    return(
        
      <div className="container">
  <h2>write Feedback</h2>
  <form>
  <textarea name="message" rows="6" cols="50">
Your message...........
</textarea>
<br/>
<button type="button" class="btn btn-default">Submit</button>
  </form>

</div>
    )
  }
}

export default Feedback;