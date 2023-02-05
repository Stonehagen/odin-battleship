/* eslint-disable no-undef */
import { Gameboard } from './Gameboard';

describe('Gameboard Factory', () => {
  const gameboard = Gameboard();
  it('returns a new Gameboard after calling the factory', () => {
    expect(gameboard.placeShip(3, [3, 3])).toBe(true);
  });
});
