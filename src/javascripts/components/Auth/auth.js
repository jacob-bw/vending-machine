import goobutt from './googleButton.png';
import utilities from '../../helpers/utilities';

const loginButton = () => {
  const domString = `<button class="btn btn-danger">
    <img src=${goobutt} />
  </button>`;

  utilities.printToDom('auth', domString);
};

export default { loginButton };
