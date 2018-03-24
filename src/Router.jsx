
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Login from './login';
import Register from './Register';

import BookingSlot from './Booking'

class Routes extends  React.Component{
render(){
return(
    <Router>
    <div>
        <NavBar />
        <div className="row">
            <div className="col-md-8 col-md-offset-2">
            <Route exact={true} path='/login' component={Login} />
            <Route exact={true} path='/register' component={Register} />
            <Route exact={true} path='/booking' component={BookingSlot} />  
            
            </div>
        </div>
    </div>
</Router>

)


}

}


export default Routes;