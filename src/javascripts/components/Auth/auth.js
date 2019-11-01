import $ from 'jquery';
import firebase from 'firebase/app';
import 'firebase/auth';

import goobutt from './googleButton.png';
import utilities from '../../helpers/utilities';

const signMeIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const loginButton = () => {
  const domString = `<button class="btn btn-primary" id="google-auth">
    <img src=${goobutt} />
  </button>`;

  utilities.printToDom('auth', domString);
  $('#google-auth').click(signMeIn);
};

export default { loginButton };
