import React, { Component } from 'react'
import Users from './Components/Users';
import Navbar from './Components/Navbar';
import './App.css';

class App extends Component {
  state={
    users: [{
      id:1,
      name:"Kazım İNCEBAY",
      department:"Bilgi Teknolojileri",
      salary:"1000",
    },
    {
      id:2,
      name:"Ali Veli",
      department:"Finans",
      salary:"1000",
    },
    {
      id:3,
      name:"Kemalettin Taslak",
      department:"Pazarlama",
      salary:"4000",
    }]
  }
  render() {
    return (
      <div className='container'>
      <Navbar title="User App 2"/>
      <Users users={this.state.users}/>
    </div>
    )
  }
}
export default App;