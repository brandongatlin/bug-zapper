import React, { Component } from 'react';

import { Link, withRouter } from 'react-router-dom';

// import { auth } from '../../firebase';
//
// import * as routes from '../../constants/routes';
//
// import firebase from 'firebase/app';

const byPropKey = ( propertyName, value ) => () => ( { [ propertyName ]: value } );

class ProfilePage extends Component {
  constructor( props ) {
    super( props );

    this.state = {
      userFirstName: '',
      userLastName: '',
      profilePic: '',
      facilityName: '',
      error: null
    };
  }

  onSubmit = ( event ) => {
    console.log( 'submit' );
  };

  render() {
    const { userFirstName, userLastName, profilePic, facilityName, error } = this.state;
    const isInvalid = userFirstName === '' || userLastName === '' || facilityName === '';

    return ( <div>
      <h1>profile page</h1>{' '}
      <form onSubmit={this.onSubmit}>
        {' '}
        <input value={userFirstName} onChange={( event ) => this.setState( byPropKey( 'userFirstName', event.target.value ) )} type="text" placeholder="First Name"/>
        <input value={userLastName} onChange={( event ) => this.setState( byPropKey( 'userLastName', event.target.value ) )} type="text" placeholder="Last Name"/>
        <input value={profilePic} onChange={( event ) => this.setState( byPropKey( 'profilePic', event.target.value ) )} type="text" placeholder="Profile Pic"/>
        <input value={facilityName} onChange={( event ) => this.setState( byPropKey( 'facilityName', event.target.value ) )} type="text" placeholder="Facility"/>
        <button disabled={isInvalid} type="submit">
          Update Profile
        </button>
        {error && <p>{error.message}</p>}{' '}
      </form>
    </div> );
  }
}

export default withRouter( ProfilePage );
