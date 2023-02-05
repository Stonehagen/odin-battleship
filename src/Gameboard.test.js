/* eslint-disable no-undef */
import { Gameboard } from './Gameboard';

describe('Gameboard Factory', () => {
  const gameboard = Gameboard();
  const coords = [
    [3, 3],
    [3, 2],
    [3, 1],
  ];
  it('returns a new Gameboard after calling the factory', () => {
    expect(gameboard.placeShip(3, coords)).toBe(true);
    expect(gameboard.ships[0].pos).toEqual(coords);
    expect(gameboard.receiveAttack([1, 1])).toBe(true);
    expect(gameboard.receiveAttack([3, 3])).toBe(true);
    expect(gameboard.receiveAttack([3, 3])).toBe(false);
    expect(gameboard.ships[0].damage).toBe(1);
  });
});
