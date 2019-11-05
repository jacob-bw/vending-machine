import './stockCard.scss';

const makeASnack = (snack) => {
  const domString = `
      <div class="card col-3 snack-card">
      <div class="card-body">
          <h3 class="card-title">${snack.name}</h3>
          <p class="card-text">$${snack.price / 100}</p>
          <p class="card-text">${snack.position.position}</p>
        </div>
      </div>
      `;
  return domString;
};

export default { makeASnack };
