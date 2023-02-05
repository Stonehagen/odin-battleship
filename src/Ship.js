// eslint-disable-next-line import/prefer-default-export
export const Ship = (length, coords) => {
  const ship = {};
  ship.length = length;
  ship.damage = 0;
  ship.sunk = false;
  ship.pos = coords;

  ship.isSunk = () => ship.damage >= ship.length;

  ship.hit = () => {
    ship.damage += 1;
    ship.sunk = ship.isSunk();
  };

  return ship;
};
