import { Ship } from "../src/Ship";

describe('Ship Class', () => {
  test('new Ship returns a new Object', () => {
    const ship = new Ship(2);
    expect(ship).toBeInstanceOf(Ship);
    expect(ship.length).toBe(2);
    expect(ship.hits).toBe(0);
    expect(ship.sunk).toBe(false);
  });
});
