import smash from '../../helpers/data/smash';
import utilities from '../../helpers/utilities';
import snack from '../Snacks/snacks';

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
    })
    .catch((error) => console.error(error));
};

export default { buildTheMachine };
