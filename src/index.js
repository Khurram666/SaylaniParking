import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './NavBar';
import {BrowserRouter as Router} from 'react-router-dom';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import Routes from './Router'
class App extends React.Component {
    render() {

        return (

<Routes/>

        )

    }

}


ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
