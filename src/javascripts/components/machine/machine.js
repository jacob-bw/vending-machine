import $ from 'jquery';

import smash from '../../helpers/data/smash';
import utilities from '../../helpers/utilities';
import snack from '../Snacks/snacks';
import snackData from '../../helpers/data/snackData';

const buySnack = (e) => {
  e.stopImmediatePropagation();
  const snackId = e.target.id.split('buy-')[1];
  snackData.buySnack(snackId)
    // eslint-disable-next-line no-use-before-define
    .then(() => buildTheMachine())
    .catch((error) => console.error(error));
};

const buildTheMachine = () => {
  smash.getCompleteMachine()
    .then((positions) => {
      let domString = '<h2>Vending Machine</h2>';
      domString += '<div id="snack-section" class="d-flex flex-wrap">';
      positions.forEach((position) => {
        domString += snack.makeASnack(position);
      });
      domString += '</div>';
      utilities.printToDom('machine', domString);
      $('#machine').on('click', '.buy-snack', buySnack);
    })
    .catch((error) => console.error(error));
};

export default { buildTheMachine, buySnack };
