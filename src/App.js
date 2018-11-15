import React, { Component } from 'react';

import './App.css';
import FistPage from './Components/FirstPage/FirstPage';
import LoginPage from './Components/LoginPage/LoginPage';
import Test from './Components/Test/Test';
import Layout from './UI/Layout/Layout';
import SignUpPage from './Components/SignUpPage/SignUpPage';
import NewPlayList from './Containers/NewPlayList/NewPlayList'

import { connect } from 'react-redux';
import {Route, Switch,withRouter} from 'react-router-dom';
import * as actions from './Store/Actions/index'

class App extends Component {

  componentDidMount(){
      this.props.autoLog();
  }

  render() {
      let routes=(
          <Switch>
              <Route path='/' exact component={FistPage}/>
              <Route path='/login' component={LoginPage}/>
              <Route path='/signup' component={SignUpPage}/>
              <Route component={FistPage}/>
          </Switch>
      );

      if(this.props.isLogIn){
          routes=(
              <Switch>
              <Route path='/' exact render={(props)=>(<Layout {...props} content='Search'/>)}/>
              <Route path='/login' render={(props)=>(<Layout {...props} content='Search'/>)}/>
              <Route path='/signup' render={(props)=>(<Layout {...props} content='Search'/>)}/>
              <Route path='/newplaylist' render={(props)=>(<Layout {...props} content='NewPlayList'/>)}/>
              <Route path='/test' component={Test}/>
              <Route path='/search' render={(props)=>(<Layout {...props} content='Search'/>)}/>
              <Route path='/artists' exact render={(props)=>(<Layout {...props} content='Artists'/>)}/>
              <Route path='/albums'  exact render={(props)=>(<Layout {...props} content='Albums'/>)}/>
              <Route path='/browse'  exact render={(props)=>(<Layout {...props} content='Browse'/>)}/>
              <Route path='/albums/:id'  render={(props)=>(<Layout {...props} content='AlbumId'/>)}/>
              <Route path='/favoriteSongs' render={(props)=>(<Layout {...props} content='Songs'/>)}/>
              <Route component={FistPage}/>


          </Switch>);
      }
//
    return (
      <div>
          {routes}
      </div>

    );
  }
}
const mapStateToProps=state=>{
    return{
        isLogIn: state.auth.token !==null
    }
};
const mapDispatchToprops = dispatch=>{
    return {
        autoLog:()=> dispatch(actions.autoLogIn())
    }
};

export default withRouter( connect( mapStateToProps , mapDispatchToprops)( App ) );
