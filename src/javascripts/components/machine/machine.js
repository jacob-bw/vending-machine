import smash from '../../helpers/data/smash';

import './machine.scss';

const buildTheMachine = () => {
  smash.getCompleteMachine()
    .then((singleMachine) => console.log('1 machine', singleMachine))
    .catch((error) => console.error(error));
  // 1. getMachines - returns first machine (hard coding) - DONE
  // 2. use machineId to get all positions for that machine - DONE
  // 3. use machineId to get all snack positions - DONE
  // 4. use uid of snackPositions/positions to get available snacks for machine
  // 5. Smash em - return an array of posiitons (in order A1, A2, A3, etc)
  // so positions should have position.snack
};

export default { buildTheMachine };
