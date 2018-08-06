import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from './Navigation/Navigation';
import LandingPage from './Landing/Landing';
import SignUpPage from './SignUp/SignUp';
import ProfilePage from './Profile/Profile';
import SignInPage from './SignIn/SignIn';
import PasswordForgetPage from './PasswordForget/PasswordForget';
import HomePage from './Home/Home';
import AccountPage from './Account/Account';

import * as routes from '../constants/routes';

import { firebase } from '../firebase';

class App extends Component {
  constructor( props ) {
    super( props );

    this.state = {
      authUser: null
    };
  }

  componentDidMount() {
    firebase
      .auth
      .onAuthStateChanged( ( authUser ) => {
        console.log( authUser.email );
        authUser
          ? this.setState( { authUser } )
          : this.setState( { authUser: null } );
      } );
  }

  render() {
    return ( <Router>
      <div>
        <Navigation authUser={this.state.authUser}/>
        <hr/>

        <Route path={routes.LANDING} component={() => <LandingPage/>}/>
        <Route path={routes.SIGN_UP} component={() => <SignUpPage/>}/>
        <Route path={routes.PROFILE} component={() => <ProfilePage/>}/>
        <Route path={routes.SIGN_IN} component={() => <SignInPage/>}/>
        <Route path={routes.PASSWORD_FORGET} component={() => <PasswordForgetPage/>}/>
        <Route path={routes.HOME} component={() => <HomePage/>}/>
        <Route path={routes.ACCOUNT} component={() => <AccountPage/>}/>
      </div>
    </Router> );
  }
}

export default App;
