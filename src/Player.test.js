import { Player } from './Player';

describe('Plater Factories', () => {
  const player = Player('name');
  it('should return a new Player after calling the factory', () => {
    expect(player.name).toBe('name');
  });
});
