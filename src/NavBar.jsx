import React from 'react';
import {Link} from 'react-router-dom';


class NavBar extends React.Component {
render() {
return(
    <nav className="navbar navbar-default">
    <div className="container-fluid">
        
        <ul className="nav navbar-nav">
        <li><Link to='/'>Home </Link></li>
                    <li><Link to='/login'> Login</Link></li>
                    <li><Link to='/register'>Register</Link></li>
                    <li><Link to='/booking'>Booking</Link></li>

        </ul>
    </div>
</nav>


    
);


}





}
export default NavBar;