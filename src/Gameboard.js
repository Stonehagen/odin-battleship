import { Field } from './Field';
import { Ship } from './Ship';

// eslint-disable-next-line import/prefer-default-export
export const Gameboard = () => {
  const gameboard = {};
  gameboard.board = () => {
    const gBoard = [];
    for (let i = 0; i < 10; i += 1) {
      const row = [];
      for (let j = 0; j < 10; j += 1) {
        const field = Field([j, i]);
        row.push(field);
      }
      gBoard.push(row);
    }
  };
  gameboard.ships = [];
  gameboard.placeShip = (length, coords) => {
    const newShip = Ship(length);
    gameboard.ships.push(newShip);
    return true;
  };

  return gameboard;
};
