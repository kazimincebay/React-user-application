import React, { Component } from 'react'
import Users from './Components/Users';
import Navbar from './Components/Navbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='container'>
      <Navbar title="User App 2"/>
      <Users/>
    </div>
    )
  }
}
export default App;