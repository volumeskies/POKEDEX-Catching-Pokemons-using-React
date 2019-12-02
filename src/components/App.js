import React, { Component } from 'react';
import './styles/App.css';
import Header from './Header'
import Home from './Home';
import Catched from './Catched'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import RoutePaths from './Constants'

class App extends React.Component{npm 
    render(){
        return(
            <div className="App">
                <Router>
                    <Header />
                    <Route path={RoutePaths.HOMEPAGE} exact component={Home}/>
                    <Route path={RoutePaths.CATCHED} component={Catched}/>
                </Router>
            </div>
        );
    }
}

export default App