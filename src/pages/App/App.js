import React, {Component} from 'react';
import {Route, Link, Switch, Redirect, BrowserRouter as Router} from 'react-router-dom'
import LandingPage from '../LandingPage/LandingPage'
import './App.css';

class App extends Component{
  render(){
    return (
      <div>
        <h1>Did I print?</h1>
        <LandingPage />
      </div>
    )
  }
}

export default App;
