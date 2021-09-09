import sum from './index.js';

describe('sum', () => {
  it('should return sum of numbers', () => {
    expect(sum(1, 1)).toBe(2);
  });
});

