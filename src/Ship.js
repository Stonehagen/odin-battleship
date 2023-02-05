// eslint-disable-next-line import/prefer-default-export
export const Ship = (length, coordsArr) => {
  const ship = {};
  ship.length = length;
  ship.damage = 0;
  ship.sunk = false;
  ship.pos = coordsArr;

  ship.isSunk = () => ship.damage >= ship.length;

  ship.hit = () => {
    ship.damage += 1;
    ship.sunk = ship.isSunk();
  };

  return ship;
};
