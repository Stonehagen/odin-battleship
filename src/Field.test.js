/* eslint-disable no-undef */
import { Field } from './Field';

describe('Field Factory', () => {
  const field = new Field([5, 2]);

  it('should return the coordinates when call with Coordinate', () => {
    expect(field.coordinates).toEqual([5, 2]);
  });
});
