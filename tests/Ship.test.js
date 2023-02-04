import { Ship } from "../src/Ship";

describe('Ship Class', () => {
  it('returns a new Ship after calling with new', () => {
    const ship = new Ship(2);
    expect(ship).toBeInstanceOf(Ship);
    expect(ship.length).toBe(2);
    expect(ship.hits).toBe(0);
    expect(ship.sunk).toBe(false);
  });
});
