import firebase from 'firebase';

import auth from './components/Auth/auth';
import authData from './helpers/data/authData';
import logout from './components/myNavBar/myNavBar';

import apiKeys from './helpers/apiKeys.json';

import '../styles/main.scss';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  authData.checkLoginStatus();
  auth.loginButton();
  logout.logoutEvent();
};

init();
