import $ from 'jquery';
import firebase from 'firebase/app';
import 'firebase/auth';
import stocker from '../../components/stocker/stocker';

const authDiv = $('#auth');
const stockDiv = $('#stock');
const logoutNavbar = $('#logoutNavbarFunction');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      stockDiv.removeClass('hide');
      logoutNavbar.removeClass('hide');
      authDiv.addClass('hide');
      stocker.buildTheStocker(user.uid);
    } else {
      stockDiv.addClass('hide');
      logoutNavbar.addClass('hide');
      authDiv.removeClass('hide');
    }
  });
};

export default { checkLoginStatus };
