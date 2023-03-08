import React, { Component } from 'react'
import Users from './Components/Users';
import Navbar from './layout/Navbar';
import NotFound from './pages/NotFound';
import UpdateUser from './forms/UpdateUser';
import Contribute from './pages/Contribute';
import { BrowserRouter ,Route, Switch } from 'react-router-dom';
import './App.css';
import AddUser from './forms/AddUser';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='container'>

          <Navbar title="User App 2" />
          <hr />
          <Switch>
            <Route exact path='/' component={Users} />
            <Route exact path='/add' component={AddUser} />
            <Route exact path='/project' component={Contribute} />
            <Route exact path='/edit/:id' component={UpdateUser} />
            <Route component={NotFound}/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
export default App;