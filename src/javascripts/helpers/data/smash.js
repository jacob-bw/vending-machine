import machineData from './machineData';
import positionData from './positionData';
import snackPositionData from './snackPositionData';
import snackData from './snackData';

// 1. getMachines - returns first machine (hard coding) - DONE
// 2. use machineId to get all positions for that machine - DONE
// 3. use machineId to get all snack positions - DONE
// 4. use uid of snackPositions/positions to get available snacks for machine - DONE
// 5. Smash em - return an array of posiitons (in order A1, A2, A3, etc)
// so positions should have position.snack

const getCompleteMachine = () => new Promise((resolve, reject) => {
  machineData.getMachine()
    .then((singleMachine) => positionData.getAllPositionsByMachineId(singleMachine.id))
    .then((positions) => {
      snackPositionData.getAllSnackPositionsByMachineId(positions[0].machineId)
        .then((snackPositions) => {
          snackData.getSnacksByUid(positions[0].uid).then((snacks) => {
            const newPositions = [];
            positions.forEach((position) => {
              const newP = { ...position };
              const getSnackPosition = snackPositions.find((x) => x.positionId === newP.id);
              if (getSnackPosition) {
                const snack = snacks.find((x) => x.id === getSnackPosition.snackId);
                newP.snack = snack;
              } else {
                newP.snack = {};
              }
              newPositions.push(newP);
            });
            resolve(newPositions);
          });
        });
    })
    .catch((error) => reject(error));
});

export default { getCompleteMachine };