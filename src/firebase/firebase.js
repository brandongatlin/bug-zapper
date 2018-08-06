import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAfoOHXV64vusi_spShOVkM-8qqIy1-9DU',
  authDomain: 'bugzapper-3e2c5.firebaseapp.com',
  databaseURL: 'https://bugzapper-3e2c5.firebaseio.com',
  projectId: 'bugzapper-3e2c5',
  storageBucket: 'bugzapper-3e2c5.appspot.com',
  messagingSenderId: '977179511422'
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export { auth };
