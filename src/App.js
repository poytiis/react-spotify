import React, { Component } from 'react';

import './App.css';
import FistPage from './Components/FirstPage/FirstPage';
import LoginPage from './Components/LoginPage/LoginPage';
import Test from './Components/Test/Test';
import Layout from './UI/Layout/Layout';
import SignUpPage from './Components/SignUpPage/SignUpPage';



import {Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
//
    return (

      <Switch>
          <Route path='/' exact component={FistPage}/>
          <Route path='/login' component={LoginPage}/>
          <Route path='/signup' component={SignUpPage}/>
          <Route path='/test' component={Test}/>
          <Route path='/search' render={(props)=>(<Layout {...props} content='Search'/>)}/>
          <Route path='/artists' exact render={(props)=>(<Layout {...props} content='Artists'/>)}/>
          <Route path='/albums'  exact render={(props)=>(<Layout {...props} content='Albums'/>)}/>
          <Route path='/albums/:id'  render={(props)=>(<Layout {...props} content='AlbumId'/>)}/>
          <Route path='/favoriteSongs' render={(props)=>(<Layout {...props} content='Songs'/>)}/>
          <Route component={FistPage}/>


      </Switch>
    );
  }
}

export default App;
