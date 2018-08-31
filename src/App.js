import React, { Component } from 'react';

import './App.css';
import FistPage from './Components/FirstPage/FirstPage';
import LoginPage from './Components/LoginPage/LoginPage';
import Test from './Components/Test/Test';
import Layout from './UI/Layout/Layout';



import {Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {

    return (

      <Switch>
          <Route path='/' exact component={FistPage}/>
          <Route path='/login' component={LoginPage}/>
          <Route path='/test' component={Test}/>
          <Route path='/search' render={(props)=>(<Layout {...props} content='Search'/>)}/>
          <Route path='/artists' render={(props)=>(<Layout {...props} content='Artists'/>)}/>
          <Route component={FistPage}/>


      </Switch>
    );
  }
}

export default App;
