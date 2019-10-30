import firebase from 'firebase';

import apiKeys from './helpers/apiKeys.json';

import '../styles/main.scss';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  console.log('hi', apiKeys.firebaseKeys);
};

init();
