import React from 'react';
import Game from './Game'
// import { Container } from 'semantic-ui-react'
import { Switch, Route } from 'react-router-dom';
// import AuthenticatedRoute from '../components/AuthenticatedRoute'
// import UnauthenticatedRoute from '../components/UnauthenticatedRoute'
// import LoginForm from '../components/LoginForm'
// import SignupForm from '../components/SignupForm'
import MenuBar from '../components/MenuBar'
import HomePage from './HomePage'

import { connect } from 'react-redux'
import { toggleInGame, loginUser, logoutUser } from '../actions/users'



function MainContainer(props) {

  return (
    <>
      <MenuBar logoutDispatch={props.logoutDispatch} currentUser={props.currentUser} />
      <Switch>
            <Route path="/play" exact component={Game} currentUser={props.currentUser}/>
            <Route path="/" exact component={HomePage} />
      </Switch>
    </>
    
  );
}

function msp(state) {
  return { 
      currentUser: state.currentUser 
  }
}

function mdp(dispatch) {
  return {
      toggleDispatch: (inGame) => dispatch(toggleInGame(inGame)),
      loginDispatch: (user) => dispatch(loginUser(user)),
      logoutDispatch: () => dispatch(logoutUser())
  }
}



export default connect(msp, mdp)(MainContainer);
