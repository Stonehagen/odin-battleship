/* eslint-disable operator-linebreak */
import { Field } from './Field';
import { Ship } from './Ship';

// eslint-disable-next-line import/prefer-default-export
export const Gameboard = () => {
  const gameboard = {};
  gameboard.board = (() => {
    const gBoard = [];
    for (let i = 1; i <= 10; i += 1) {
      const row = [];
      for (let j = 1; j <= 10; j += 1) {
        const field = Field([j, i]);
        row.push(field);
      }
      gBoard.push(row);
    }
    return gBoard;
  })();

  gameboard.ships = [];

  gameboard.placeShip = (length, coordsArr) => {
    const newShip = Ship(length, coordsArr);
    gameboard.ships.push(newShip);
    return true;
  };

  gameboard.receiveAttack = (targetCoords) => {
    const targetField =
      gameboard.board[targetCoords[1] - 1][targetCoords[0] - 1];
    if (targetField.shot === null) {
      gameboard.ships.forEach((ship) => {
        ship.pos.forEach((shipCoords) => {
          if (
            shipCoords[0] === targetCoords[0] &&
            shipCoords[1] === targetCoords[1]
          ) {
            targetField.shot = 'hit';
            ship.hit();
          }
        });
      });
      targetField.shot = targetField.shot === null ? 'miss' : targetField.shot;
      return true;
    }
    return false;
  };

  gameboard.fleetSunk = () => {
    const fleetLeft = gameboard.ships.filter((ship) => !ship.sunk);
    return !(fleetLeft.length > 0);
  };

  return gameboard;
};
