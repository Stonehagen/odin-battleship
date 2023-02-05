import { Gameboard } from './Gameboard';

describe('Gameboard Factory', () => {
  const gameboard = Gameboard();
  it('returns a new Gameboard after calling the faktory', () => {
    expect(gameboard.place(3, [3, 3])).toBe(true);
  }).
})