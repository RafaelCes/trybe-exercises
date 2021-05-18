const sum = require('./sum');

describe('test sum', () => {
  it('test sum with parameters 4 and 5 returns 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
  it('test sum with parameter 0 and 0 returns 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
  it('test if sum throws an error whit the parameters 4 and "5"', () => {
    expect(() => sum(4,'5')).toThrow();
  });
  it('error message must be "parameters must be numbers"', () => {
    expect(() => {
      sum(4, '5')
    }).toThrow(new Error('parameters must be numbers'));
  });
});

