import { Ship } from '../src/Ship';

describe('Ship Class', () => {
  const ship = new Ship(2);
  it('returns a new Ship after calling with new', () => {
    expect(ship).toBeInstanceOf(Ship);
    expect(ship.length).toBe(2);
    expect(ship.sunk).toBe(false);
  });

  it('ship sunk after two hits', () => {
    ship.hit();
    expect(ship.sunk).toBe(false);
    ship.hit();
    expect(ship.sunk).toBe(true);
  });
});
