describe('Ship Class', () => {
  test('new Ship returns a new Object', () => {
    expect(new Ship(3)).toBeInstanceOf(Ship);
    expect(new Ship(2)).toEqual({ length: 2, hits: 0, sunk: false });
  });
});
